class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;
        let leftMax = 0;
        let rightMax = 0;

        let left = 0;
        let right = height.length - 1;

        while(left < right) {
            
            if(height[left] <= height[right]) {
                if(height[left] < leftMax) {
                    totalWater += leftMax - height[left]
                } else {
                    leftMax = height[left]
                }
                left++;
            } else {
                if(height[right] < rightMax) {
                    totalWater += rightMax - height[right]
                } else {
                    rightMax = height[right]
                }
                right--;
            }
        }
        return totalWater;
    }
}
