function findMaxConsecutiveOnes(nums: number[]): number {
	let left = 0;
	let maxLength = 0;
	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) {
			left = right + 1;
		} else {
			maxLength = Math.max(maxLength, right - left + 1);
		}
	}

	return maxLength;
}
