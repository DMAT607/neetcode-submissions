class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = new Map();

        for (let i = 0; i < nums.length; i++) {
            counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
        }
        return [...counter.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0]);
    }
}
