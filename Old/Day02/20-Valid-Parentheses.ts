function isValid(s: string): boolean {
	let stack: string[] = [];
	if (s.length === 1) return false;
	for (let char of s) {
		switch (char) {
			case "(":
			case "{":
			case "[":
				stack.push(char);
				break;

			case ")":
				if (stack[stack.length - 1] !== "(") {
					return false;
				}
				stack.pop();
				break;
			case "}":
				if (stack[stack.length - 1] !== "{") {
					return false;
				}
				stack.pop();
				break;
			case "]":
				if (stack[stack.length - 1] !== "[") {
					return false;
				}
				stack.pop();
				break;
		}
	}

	return stack.length === 0;
}
