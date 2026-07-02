class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let maxWater = 0;
        while(left < right) {
            const volume = Math.min(heights[left], heights[right]) * (right - left)
            maxWater = Math.max(maxWater, volume);
            if(heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxWater;
    }
}
