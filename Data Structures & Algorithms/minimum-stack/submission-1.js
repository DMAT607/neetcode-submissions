class MinStack {
    constructor() {
        this.stack = [];
        this.minValue = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minValue.length === 0 || this.minValue[this.minValue.length - 1] >= val) {
            this.minValue.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const popVal = this.stack.pop();
        if(this.minValue[this.minValue.length - 1] === popVal) {
            this.minValue.pop();
        }

    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValue[this.minValue.length - 1]
    }
}
