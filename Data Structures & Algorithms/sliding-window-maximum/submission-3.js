class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deq = [];
        let result = [];

        for(let right = 0; right < nums.length; right++) {
            while(deq.length && nums[deq[deq.length - 1]] <= nums[right]) {
                deq.pop();
            }

            deq.push(right);

            if(deq[0] <= right - k) {
                deq.shift()
            }

            if(right >= k - 1) {
                result.push(nums[deq[0]])
            }
        }
        return result;
    }
}
