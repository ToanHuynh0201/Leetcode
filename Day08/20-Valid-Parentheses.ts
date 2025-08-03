function isValid2(s: string): boolean {
	const stack: string[] = [];
	if (s.length === 1) return false;
	for (let c of s) {
		switch (c) {
			case "(":
			case "{":
			case "[":
				stack.push(c);
				break;
			case ")":
				if (stack.pop() !== "(") return false;
				break;
			case "}":
				if (stack.pop() !== "{") return false;
				break;
			case "]":
				if (stack.pop() !== "[") return false;
				break;
		}
	}

	return stack.length === 0;
}
