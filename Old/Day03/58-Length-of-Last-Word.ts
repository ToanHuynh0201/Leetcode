function lengthOfLastWord(s: string): number {
	let n = s.length - 1;
	let res = 0;

	while (n >= 0) {
		if (s[n] !== " ") {
			res++;
		} else if (res > 0) {
			return res;
		}
		n--;
	}

	return res;
}
