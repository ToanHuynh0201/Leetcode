function longestConsecutive(nums: number[]): number {
	const numsSet = new Set(nums);

	let longestLength = 0;
	for (let n of numsSet) {
		if (!numsSet.has(n - 1)) {
			let newN = n;
			let length = 1;

			while (numsSet.has(newN + 1)) {
				length++;
				newN++;
			}

			if (longestLength < length) longestLength = length;
		}
	}

	return longestLength;
}
