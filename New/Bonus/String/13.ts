function romanToInt(s: string): number {
	const romanMap = new Map<string, number>([
		["I", 1],
		["V", 5],
		["X", 10],
		["L", 50],
		["C", 100],
		["D", 500],
		["M", 1000],
	]);

	if (!s) return 0;

	const n = s.length;
	let res = romanMap.get(s[n - 1])!;

	for (let i = n - 2; i >= 0; i--) {
		res +=
			romanMap.get(s[i])! < romanMap.get(s[i + 1])!
				? -romanMap.get(s[i])!
				: romanMap.get(s[i])!;
	}

	return res;
}
