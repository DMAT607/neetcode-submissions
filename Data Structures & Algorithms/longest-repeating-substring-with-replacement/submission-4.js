class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0;
        let left = 0;
        let longest = 0;

        let counter = new Map();
        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            counter.set(char, (counter.get(char) || 0) + 1);
            maxFreq = Math.max(maxFreq, counter.get(char));
            while ((i - left + 1) - maxFreq > k) {
                counter.set(s[left], counter.get(s[left]) - 1)
                left++;
            }
            longest = Math.max(i - left + 1, longest);
        }
        return longest;
    }
}
