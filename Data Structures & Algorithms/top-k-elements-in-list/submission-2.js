class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const bucket = Array(nums.length + 1).fill().map(() => []);

        for(const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        for(const [num, count] of freq) {
            bucket[count].push(num);
        }

        let result = [];
        for(let i = bucket.length - 1; i >= 0; i--) {
            for(const elem of bucket[i]) {
                result.push(elem);
                if(result.length === k) return result;
            }
        }
    }
}
