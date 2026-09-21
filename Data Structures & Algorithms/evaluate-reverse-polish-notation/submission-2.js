class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i < tokens.length; i++) {
            let num = Number(tokens[i])
            let result = 0;

            if(isFinite(num)) {
                stack.push(num);
            } else {
                switch(tokens[i]) {
                    case "+":
                        result = stack[stack.length - 1] + stack[stack.length - 2];
                        stack.pop();
                        stack.pop();
                        stack.push(result);
                        break;
                    case "-":
                        result = stack[stack.length - 2] - stack[stack.length - 1];
                        stack.pop();
                        stack.pop();
                        stack.push(result);
                        break;
                    case "*":
                        result = stack[stack.length - 1] * stack[stack.length - 2];
                        stack.pop();
                        stack.pop();
                        stack.push(result);
                        break;
                    case "/":
                        result = Math.trunc(stack[stack.length - 2]/stack[stack.length - 1]);
                        stack.pop();
                        stack.pop();
                        stack.push(result);
                        break;
                }
            }
        }
        return stack[0];
    }
}
