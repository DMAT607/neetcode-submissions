class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const strArr = s.split('');
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        const stack = [];
        for(let i = 0; i < s.length; i++) {
            if(pairs[strArr[i]]) {
                const recent = stack.pop();
                if(recent !== pairs[strArr[i]]) return false;
                continue;
            }
            stack.push(strArr[i])
        }

        return stack.length === 0 ? true : false;
    }
}
