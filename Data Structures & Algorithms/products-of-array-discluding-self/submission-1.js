class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const productArr = [];

        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    product *= nums[j];
                }
            }
            productArr.push(product);
        }

        return productArr;
    }
}
