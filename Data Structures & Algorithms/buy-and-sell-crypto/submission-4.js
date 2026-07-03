class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for(let i = 1; i < prices.length; i++) {
            if(prices[i] < minPrice) {
                minPrice = prices[i]
            }
            const profit = prices[i] - minPrice;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
