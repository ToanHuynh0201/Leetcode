function majorityElement(nums: number[]): number[] {
	const map = new Map<number, number>();
	for (const num of nums) {
		map.set(num, (map.get(num) ?? 0) + 1);
	}

	return Array.from(map.entries())
		.filter((entry) => entry[1] > nums.length / 3)
		.map(([key]) => key);
}
