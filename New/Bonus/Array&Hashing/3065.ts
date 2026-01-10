function minOperations(nums: number[], k: number): number {
	return nums.reduce((total, curr) => {
		if (curr < k) total++;
		return total;
	}, 0);
}
