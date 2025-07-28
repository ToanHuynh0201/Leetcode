function containsDuplicate(nums: number[]): boolean {
	if (nums.length === 0 || nums.length === 1) return false;

	const map: Map<number, number> = new Map();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const duplicateIndex = map.get(num);

		if (duplicateIndex !== undefined) {
			return true;
		}

		map.set(num, i);
	}

	return false;
}
