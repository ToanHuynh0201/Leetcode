function evalRPN(tokens: string[]): number {
	const stack: number[] = [];

	for (const char of tokens) {
		switch (char) {
			case "+":
				stack.push(stack.pop()! + stack.pop()!);
				break;
			case "-":
				const a = stack.pop()!;
				const b = stack.pop()!;
				stack.push(b - a);
				break;
			case "*":
				stack.push(stack.pop()! * stack.pop()!);
				break;
			case "/":
				const x = stack.pop()!;
				const y = stack.pop()!;
				stack.push(Math.trunc(y / x));
				break;
			default:
				stack.push(Number(char));
		}
	}

	return stack.pop()!;
}
