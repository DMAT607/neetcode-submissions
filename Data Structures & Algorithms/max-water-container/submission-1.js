class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maximum = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const amountOfWater = (right - left) * Math.min(heights[left], heights[right]);
            maximum = Math.max(amountOfWater, maximum);
            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }
        return maximum;
    }
}
