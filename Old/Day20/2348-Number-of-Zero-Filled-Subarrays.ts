function zeroFilledSubarray(nums: number[]): number {
	let size = 0;
	let total = 0;
	for (let n of nums) {
		if (n === 0) {
			size += 1;
		} else {
			if (size !== 0) {
				total += (size * (size + 1)) / 2;
				size = 0;
			}
		}
	}
	if (size !== 0) {
		total += (size * (size + 1)) / 2;
	}
	return total;
}
