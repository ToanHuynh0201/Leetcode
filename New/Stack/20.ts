function isValid(s: string): boolean {
	const map = new Map<string, string>([
		[")", "("],
		["]", "["],
		["}", "{"],
	]);
	const stack: string[] = [];

	for (const char of s) {
		if (map.has(char)) {
			if (stack.pop() !== map.get(char)) return false;
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
}
