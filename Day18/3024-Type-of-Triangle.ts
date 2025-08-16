function triangleType(nums: number[]): string {
	let sumOfEdges = nums.reduce((acc, curr) => (acc = acc + curr));
	if (Math.max(...nums) >= sumOfEdges - Math.max(...nums)) return "none";
	const [a, b, c] = nums;

	if (a === b && b === c) {
		return "equilateral";
	}
	if (a === b || b === c || a === c) {
		return "isosceles";
	}
	return "scalene";
}
