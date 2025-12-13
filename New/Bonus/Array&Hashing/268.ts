function missingNumber(nums: number[]): number {
	let n = nums.length;

	let sum = (n * (n - 1)) / 2;

	let arraySum = nums.reduce((total, curr) => total + curr, 0);

	return sum - arraySum;
}
