function majorityElement(nums: number[]): number {
	const sorted = nums.sort((a, b) => a - b);
	const middleIndex = Math.floor(nums.length / 2);
	return sorted[middleIndex];
}
