class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;

        let seen = new Set();
        const splitString = s.split('');

        for (let i = 0; i < splitString.length; i++) {
            while(seen.has(splitString[i])) {
                seen.delete(splitString[left]);
                left++;
            }

            seen.add(splitString[i]);
            longest = Math.max(longest, i - left + 1)
        }
        return longest;
    }
}
