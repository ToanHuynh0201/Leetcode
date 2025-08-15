function isPowerOfFour(n: number): boolean {
	if (n < 0) return false;

	const x = Math.log(n) / Math.log(4);

	return Math.abs(x - Math.round(x)) < 1e-10;
}
