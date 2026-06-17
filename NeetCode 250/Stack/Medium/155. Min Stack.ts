class MinStack {
	private stack: number[];
	private minStack: number[];
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(value: number): void {
		this.stack.push(value);
		this.minStack.push(
			this.minStack.length === 0
				? value
				: Math.min(value, this.minStack.at(-1)!),
		);
	}

	pop(): void {
		this.stack.pop();
		this.minStack.pop();
	}

	top(): number {
		return this.stack.at(-1)!;
	}

	getMin(): number {
		return this.minStack.at(-1)!;
	}
}
