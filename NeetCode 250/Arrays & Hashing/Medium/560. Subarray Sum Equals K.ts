function subarraySum(nums: number[], k: number): number {
	let count: number = 0;
	let currSum: number = 0;

	const map = new Map<number, number>();
	map.set(0, 1);

	for (const num of nums) {
		currSum += num;

		if (map.has(currSum - k)) count += map.get(currSum - k)!;

		map.set(currSum, (map.get(currSum) ?? 0) + 1);
	}

	return count;
}
