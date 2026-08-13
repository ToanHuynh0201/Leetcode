// function longestConsecutive(nums: number[]): number {
// 	const unique = [...new Set(nums)].sort((a, b) => a - b);
// 	if (nums.length === 0) return 0;
// 	let res = 1;

// 	for (let i = 1; i < unique.length; i++) {
// 		let temp = 1;
// 		while (unique[i] === unique[i - 1] + 1) {
// 			temp++;
// 			i++;
// 		}
// 		res = Math.max(res, temp);
// 		temp = 1;
// 	}

// 	return res;
// }
function longestConsecutive(nums: number[]): number {
	const set = new Set(nums);
	let res = 0;

	for (let num of set) {
		if (set.has(num + 1)) continue;

		let counter = 1,
			current = num;

		while (set.has(--current)) counter++;

		res = Math.max(res, counter);
	}
	return res;
}
