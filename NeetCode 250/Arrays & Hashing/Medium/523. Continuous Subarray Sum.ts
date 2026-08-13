function checkSubarraySum(nums: number[], k: number): boolean {
	let currSum = 0;

	const map = new Map<number, number>();
	map.set(0, -1);

	for (let i = 0; i < nums.length; i++) {
		currSum += nums[i];

		const key = currSum % k;

		if (map.has(key)) {
			if (i - map.get(key)! > 1) return true;
		} else map.set(key, i);
	}
	return false;
}
