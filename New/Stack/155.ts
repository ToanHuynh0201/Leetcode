class MinStack {
	private stack: { stack: number[]; min: number };
	constructor() {
		this.stack = { stack: [], min: Infinity };
	}

	push(val: number): void {
		this.stack.stack.push(val);
		this.stack.min = this.stack.min < val ? this.stack.min : val;
	}

	pop(): void {
		this.stack.stack.pop();
		this.stack.min =
			this.stack.stack.length === 0
				? Infinity
				: Math.min(...this.stack.stack);
	}

	top(): number {
		return this.stack.stack[this.stack.stack.length - 1];
	}

	getMin(): number {
		return this.stack.min;
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
