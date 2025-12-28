// class MinStack {
// 	private minStack: { stack: number[]; minValue: number };

// 	constructor() {
// 		this.minStack = { stack: [], minValue: Infinity };
// 	}

// 	push(val: number): void {
// 		this.minStack.stack.push(val);
// 		this.minStack.minValue =
// 			this.minStack.minValue > val ? val : this.minStack.minValue;
// 	}

// 	pop(): void {
// 		const val = this.minStack.stack.pop();
// 		if (val! === this.minStack.minValue) {
// 			this.minStack.minValue =
// 				this.minStack.stack.length === 0
// 					? Infinity
// 					: Math.min(...this.minStack.stack);
// 		}
// 	}

// 	top(): number {
// 		return this.minStack.stack[this.minStack.stack.length - 1];
// 	}

// 	getMin(): number {
// 		return this.minStack.minValue;
// 	}
// }
class MinStack {
	private stack: number[];
	private minStack: number[];
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val: number): void {
		this.stack.push(val);
		this.minStack.push(
			this.minStack.length === 0
				? val
				: Math.min(val, this.minStack.at(-1)!),
		);
	}

	pop(): void {
		this.minStack.pop();
		this.stack.pop();
	}

	top(): number {
		return this.stack.at(-1)!;
	}

	getMin(): number {
		return this.minStack.at(-1)!;
	}
}
