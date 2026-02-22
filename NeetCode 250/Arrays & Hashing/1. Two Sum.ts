function twoSum(nums: number[], target: number): number[] {
	const set = new Set(nums);

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (set.has(diff) && nums.indexOf(diff) !== i) {
			return [i, nums.indexOf(diff)];
		}
	}

	return [];
}
