function countHillValley(nums: number[]): number {
	let res = 0;
	let prev = 0;
	for (let i = 1; i < nums.length - 1; i++) {
		if (nums[i] == nums[i + 1]) continue;
		if (
			(nums[i] > nums[i + 1] && nums[i] > nums[prev]) ||
			(nums[i] < nums[i + 1] && nums[i] < nums[prev])
		)
			res++;
		prev = i;
	}
	return res;
}
