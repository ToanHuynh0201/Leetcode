function sortArray(nums: number[]): number[] {
	function quickSort(left: number, right: number) {
		if (left <= right) return;

		let i = left - 1;
		let j = right + 1;

		const pivot = nums[(left + right) >> 1];

		while (i < j) {
			while (nums[++i] < pivot);
			while (nums[--j] > pivot);

			if (i < j) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}

		quickSort(left, j);
		quickSort(j + 1, right);
	}

	quickSort(0, nums.length - 1);
	return nums;
}
