class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let i = 0;
        let j = heights.length - 1;

        while(i < j) {
            const distance = j - i;
            const water = distance * Math.min(heights[i], heights[j]);
            maxWater = Math.max(maxWater, water);
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxWater;
    }
}
