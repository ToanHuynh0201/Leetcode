function romanToInt2(s: string): number {
	const values: { [key: string]: number } = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let res = 0;
	for (let i = 0; i < s.length; i++) {
		const curr = values[s[i]];
		const next = i + 1 < s.length ? values[s[i + 1]] : 0;

		if (curr < next) {
			res -= curr;
		} else {
			res += curr;
		}
	}
	return res;
}
