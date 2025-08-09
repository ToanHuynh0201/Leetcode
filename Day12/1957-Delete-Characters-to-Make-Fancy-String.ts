function makeFancyString(s: string): string {
	if (s.length < 3) return s;

	let res: string = s[0];
	let prev: string = s[0];
	let flag = false;

	for (let i = 1; i < s.length; i++) {
		const c = s[i];
		if (c !== prev) {
			res += c;
			prev = c;
			flag = false;
		} else if (!flag) {
			res += c;
			flag = true;
		}
	}
	return res;
}
