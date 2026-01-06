function maximumDifference(nums: number[]): number {
	let left = 0;
	let max = -1;
	for (let right = 1; right < nums.length; right++) {
		if (nums[right] > nums[left]) {
			max = Math.max(max, nums[right] - nums[left]);
		} else {
			left = right;
		}
	}
	return max;
}
