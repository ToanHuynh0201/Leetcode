function topKFrequent(nums: number[], k: number): number[] {
	const map = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	return Array.from(map)
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map((pair) => pair[0]);
}
