class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedArr = nums.sort((a, b) => a - b);

        let result = [];
        for (let curInd = 0; curInd < sortedArr.length - 2; curInd++) {
            if (curInd > 0 && sortedArr[curInd] === sortedArr[curInd - 1]) {
                continue;
            }
            let curNum = sortedArr[curInd];
            let left = curInd + 1;
            let right = sortedArr.length - 1;

            while (left < right) {
                const sum = curNum + sortedArr[left] + sortedArr[right];
                if (sum === 0) {
                    result.push([curNum, sortedArr[left], sortedArr[right]]);
                    left++;
                    right--;
                    while (
                        left < right &&
                        sortedArr[left] === sortedArr[left - 1]
                    ) {
                        left++;
                    }
                    while (
                        left < right &&
                        sortedArr[right] === sortedArr[right + 1]
                    ) {
                        right--;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }

            }
        }
        return result;
    }
}
