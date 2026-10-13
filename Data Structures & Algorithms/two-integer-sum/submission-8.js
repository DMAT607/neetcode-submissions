class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = new Map();
        for(let i = 0; i < nums.length; i++) {
            if(numsMap.has(target - nums[i])) {
                return [numsMap.get(target - nums[i]), i]
            }
            numsMap.set(nums[i], i)
        }
    }
}
