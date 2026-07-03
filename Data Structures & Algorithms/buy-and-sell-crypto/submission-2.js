class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;

        while(left < prices.length - 1) {
            while (right < prices.length) {
                const profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit);
                right++;
            }
            left++;
            right = left + 1;
        }
        return maxProfit;
    }
}
