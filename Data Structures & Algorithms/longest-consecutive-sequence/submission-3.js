class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        const sorted = nums.sort((a,b) => a - b);
        let longest = 1;
        let current = 1;
        for(let i = 0; i < sorted.length; i++) {
            if(sorted[i] === sorted[i - 1]) continue;

            if(sorted[i - 1] + 1 === sorted[i]) {
                current++;
            } else {
                longest = Math.max(longest, current);
                current = 1;
            }
        }
        return Math.max(longest, current);
    }
}
