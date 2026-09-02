class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let oldNums = new Map();

        for(let i = 0; i < numbers.length; i++) {
            const diff = target - numbers[i]
            if (oldNums.has(diff)) return [oldNums.get(diff) + 1, i + 1]
            oldNums.set(numbers[i], i);
        }
    }
}
