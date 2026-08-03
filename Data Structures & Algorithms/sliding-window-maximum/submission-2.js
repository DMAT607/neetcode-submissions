class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        let right = k;

        let maxArr = [];

        while(right <= nums.length) {
            let maxValue = -Infinity;
            let curWindow = nums.slice(left, right);
            curWindow.forEach((el) => {
                if(el > maxValue) maxValue = el;
            })
            maxArr.push(maxValue);
            left++;
            right++;
        }

        return maxArr;
    }
}
