class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let strSet = new Set();
        let longest = 0;
        let left = 0;
        let right = 0;

        while (right < s.length) {
            if (strSet.has(s[right])) {
                while (strSet.has(s[right])) {
                    strSet.delete(s[left]);
                    left++;
                }
            } else {
                strSet.add(s[right]);
                right++;
            }
            longest = Math.max(longest, right - left);
        }
        return longest;
    }
}
