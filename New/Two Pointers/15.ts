// function threeSum(nums: number[]): number[][] {
// 	const res: number[][] = [];
// 	nums.sort((a, b) => a - b);

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		if (i > 0 && nums[i] === nums[i - 1]) continue;
// 		let j = i + 1;
// 		let k = nums.length - 1;
// 		while (j < k) {
// 			let sum = nums[i] + nums[j] + nums[k];
// 			if (sum === 0) {
// 				res.push([nums[i], nums[j], nums[k]]);
// 				while (j < k && nums[j] === nums[j + 1]) j++;
// 				while (j < k && nums[k] === nums[k - 1]) k--;
// 				j++;
// 				k--;
// 			} else if (sum < 0) {
// 				j++;
// 			} else {
// 				k--;
// 			}
// 		}
// 	}

// 	return res;
// }

function threeSum(nums: number[]): number[][] {
	const res: number[][] = [];
	nums.sort((a, b) => a - b);
	const countMap = new Map<number, number>();
	for (let num of nums) countMap.set(num, (countMap.get(num) ?? 0) + 1);

	for (let i = 0; i < nums.length - 1; i++) {
		countMap.set(nums[i], countMap.get(nums[i])!! - 1);
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		for (let j = i + 1; j < nums.length; j++) {
			countMap.set(nums[j], countMap.get(nums[j])!! - 1);
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;

			const target = -(nums[i] + nums[j]);
			if ((countMap.get(target) ?? 0) > 0)
				res.push([nums[i], nums[j], target]);
		}

		for (let j = i + 1; j < nums.length; j++) {
			countMap.set(nums[j], (countMap.get(nums[j]) ?? 0) + 1);
		}
	}

	return res;
}
