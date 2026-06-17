function isValid(s: string): boolean {
	let stack: string[] = [];

	for (const char of s) {
		if (["(", "{", "["].includes(char)) {
			stack.push(char);
			continue;
		}

		if (
			stack.length === 0 ||
			(char === ")" && stack.pop() !== "(") ||
			(char === "}" && stack.pop() !== "{") ||
			(char === "]" && stack.pop() !== "[")
		)
			return false;
	}

	return stack.length === 0;
}
