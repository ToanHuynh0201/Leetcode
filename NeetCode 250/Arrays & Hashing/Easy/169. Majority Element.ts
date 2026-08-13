function majorityElement(nums: number[]): number {
	let major: number = 0;

	let count: number = 0;

	for (const num of nums) {
		if (count === 0) major = num;

		count += num !== major ? -1 : 1;
	}

	return major;
}
