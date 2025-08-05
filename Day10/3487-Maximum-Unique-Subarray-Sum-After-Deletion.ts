function maxSum(nums: number[]): number {
	if (Math.max(...nums) < 0) return Math.max(...nums);
	const set = new Set<number>(nums);
	let res = 0;
	for (const num of set) if (num > 0) res += num;

	return res;
}
