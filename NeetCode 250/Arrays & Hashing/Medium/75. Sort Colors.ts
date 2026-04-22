function sortColors(nums: number[]): void {
	let i = 0,
		j = 0,
		n = nums.length - 1;
	while (j <= n) {
		if (nums[j] === 0) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
			i++;
			j++;
		} else if (nums[j] === 2) {
			[nums[j], nums[n]] = [nums[n], nums[j]];
			n--;
		} else {
			j++;
		}
	}
}
