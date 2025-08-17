function maxSubsequence(nums: number[], k: number): number[] {
	const withIndex = nums.map((val, idx) => ({ val, idx }));
	withIndex.sort((a, b) => b.val - a.val);

	const topK = withIndex.slice(0, k);
	topK.sort((a, b) => a.idx - b.idx);

	return topK.map((item) => item.val);
}
