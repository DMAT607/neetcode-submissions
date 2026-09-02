class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let small = 0;
        let big = numbers.length - 1;

        while(small < big) {
            if(numbers[small] + numbers[big] > target) big--;
            if(numbers[small] + numbers[big] < target) small++;
            if(numbers[small] + numbers[big] === target) return [small + 1, big + 1];
        }
    }
}
