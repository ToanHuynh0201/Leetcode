function sortedSquares(nums: number[]): number[] {
	const squaresArray = nums.map((value) => value ** 2);
	return squaresArray.sort((a, b) => a - b);
}
