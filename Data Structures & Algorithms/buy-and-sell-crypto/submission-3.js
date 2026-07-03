class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for(let i = 1; i < prices.length; i++) {
            const profit = prices[i] - minPrice;
            if(prices[i] < minPrice) {
                minPrice = prices[i]
            }
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
