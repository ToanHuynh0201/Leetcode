function backspaceCompare(s: string, t: string): boolean {
	const stackS: string[] = [];
	const stackT: string[] = [];

	for (const sChar of s) {
		if (sChar === "#") stackS.pop();
		else stackS.push(sChar);
	}

	for (const tChar of t) {
		if (tChar === "#") stackT.pop();
		else stackT.push(tChar);
	}

	return stackS.join("") === stackT.join("");
}
