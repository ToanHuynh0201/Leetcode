function minSubArrayLen(target: number, nums: number[]): number {
	let res = Number.MAX_SAFE_INTEGER;
	const n = nums.length;
	let sum = 0;
	let left = 0;

	for (let right = 0; right < n; right++) {
		sum += nums[right];

		while (left <= right && sum >= target) {
			const currLength = right - left + 1;

			res = Math.min(res, currLength);

			sum -= nums[left];

			left++;
		}
	}

	return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}
