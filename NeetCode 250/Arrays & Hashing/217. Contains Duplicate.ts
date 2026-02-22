function containsDuplicate(nums: number[]): boolean {
	if (nums.length === 1) return false;
	const set = new Set();

	for (const num of nums) {
		if (set.has(num)) return true;

		set.add(num);
	}
	return false;
}
