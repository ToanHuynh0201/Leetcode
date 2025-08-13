// function isPowerOfThree(n: number): boolean {
// 	if (n < 0) return false;

// 	const x = Math.log(n) / Math.log(3);
// 	const diff = Math.abs(x - Math.round(x));

// 	return diff < 1e-10;
// }
function isPowerOfThree(n: number): boolean {
	if (n <= 0) return false;

	while (n % 3 === 0) {
		n /= 3;
	}

	return n === 1;
}
