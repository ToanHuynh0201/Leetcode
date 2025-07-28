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

	let res = 0;

	return res;
}
