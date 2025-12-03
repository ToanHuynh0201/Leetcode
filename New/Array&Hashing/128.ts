function longestConsecutive(nums: number[]): number {
	let res = 0;
	const set = new Set(nums);
	for (const num of set) {
		if (!set.has(num - 1)) {
			let seq = 1;
			while (set.has(num + seq)) seq++;

			res = Math.max(res, seq);
		}
	}

	return res;
}
