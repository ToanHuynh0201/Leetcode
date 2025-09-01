function findNumbers(nums: number[]): number {
	let result = 0;
	for (const num of nums) if (num.toString().length % 2 === 0) result++;

	return result;
}
