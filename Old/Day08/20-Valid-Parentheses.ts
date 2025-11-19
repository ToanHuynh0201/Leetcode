function isValid2(s: string): boolean {
	const pairs = new Map<string, string>([
		[")", "("],
		["]", "["],
		["}", "{"],
	]);

	const stack: string[] = [];

	for (const char of s) {
		if (pairs.has(char)) {
			if (stack.pop() !== pairs.get(char)!) return false;
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
}
