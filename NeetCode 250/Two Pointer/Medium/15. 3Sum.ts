function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b);

	const res: number[][] = [];
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			let total = nums[i] + nums[j] + nums[k];

			if (total === 0) {
				res.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;

				while (nums[j] === nums[j - 1] && j < k) j++;
				while (nums[k] === nums[k + 1] && j < k) k--;
			} else if (total > 0) k--;
			else j++;
		}
	}

	return res;
}
