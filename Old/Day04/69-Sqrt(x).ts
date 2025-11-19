function mySqrt(x: number): number {
	let left = 0;
	let right = x;

	while (left < right) {
		const mid = Math.floor((left + right) / 2);

		const square = mid * mid;

		if (square <= x) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return right;
}
