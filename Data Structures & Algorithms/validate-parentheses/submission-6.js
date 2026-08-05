class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (pairs[s[i]]) {
                const recent = stack.pop();
                if (recent !== pairs[s[i]]) return false;
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0 ? true : false;
    }
}
