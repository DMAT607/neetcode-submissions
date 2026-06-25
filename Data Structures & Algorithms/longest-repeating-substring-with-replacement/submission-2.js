class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const strSplit = s.split('');
        let maxFreq = 0;
        let longest = 0;
        let left = 0;

        let counter = new Map();

        for(let i = 0; i < strSplit.length; i++) {
            const char = strSplit[i];

            counter.set(char, (counter.get(char) || 0) + 1);
            maxFreq = Math.max(...counter.values());

            while((i - left + 1) - maxFreq > k) {
                counter.set(strSplit[left], counter.get(strSplit[left]) - 1);
                left++;
            }

            longest = Math.max(longest, i - left + 1);
        }
        return longest;
    }
}
