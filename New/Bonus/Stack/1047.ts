function removeDuplicates(s: string): string {
	const stack: string[] = [];

	for (let i = 0; i < s.length; i++) {
		const temp = s[i];
		const top = stack[stack.length - 1];
		if (temp === top) stack.pop();
		else stack.push(temp);
	}

	return stack.join("");
}
