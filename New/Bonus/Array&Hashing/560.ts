function subarraySum(nums: number[], k: number): number {
	const map = new Map<number, number>();
	map.set(0, 1);

	let currSum = 0;
	let count = 0;

	for (const num of nums) {
		currSum += num;

		if (map.has(currSum - k)) count += map.get(currSum - k)!;

		map.set(currSum, (map.get(currSum) ?? 0) + 1);
	}
	return count;
}
