class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for(let i = 0; i < nums.length; i++) {
            const result = target - nums[i];

            if(seen.has(result)) {
                return [seen.get(result), i]
            }
            seen.set(nums[i], i)
        }
    }
}
