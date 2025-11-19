function moveZeroes(nums: number[]): void {
	let nonZeroPointer = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			if (i !== nonZeroPointer) {
				nums[nonZeroPointer] = nums[i];
				nums[i] = 0;
			}
			nonZeroPointer++;
		}
	}
}
