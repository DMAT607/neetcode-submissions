class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let i = 0; i < strs.length; i++){
            const sorted = strs[i].split('').sort().join('');

            if(!map.has(sorted)) {
                map.set(sorted, []);
            }

            map.get(sorted).push(strs[i]);
        }

        return [...map.values()]
    }
}
