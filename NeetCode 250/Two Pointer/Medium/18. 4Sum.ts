// function fourSum(nums: number[], target: number): number[][] {
// 	nums.sort((a, b) => a - b);

// 	const result = Array<[number, number, number, number]>();

// 	for (let i = 0; i < nums.length - 3; i++) {
// 		if (i > 0 && nums[i - 1] === nums[i]) continue;

// 		for (let j = i + 1; j < nums.length - 2; j++) {
// 			if (j > i + 1 && nums[j - 1] === nums[j]) continue;

// 			let k = j + 1;
// 			let l = nums.length - 1;

// 			while (k < l) {
// 				const sum = nums[i] + nums[j] + nums[k] + nums[l];
// 				if (sum < target) {
// 					do {
// 						k++;
// 					} while (nums[k - 1] === nums[k]);
// 				} else if (sum > target) {
// 					do {
// 						l--;
// 					} while (nums[l] === nums[l + 1]);
// 				} else {
// 					result.push([nums[i], nums[j], nums[k], nums[l]]);
// 					do {
// 						k++;
// 					} while (nums[k - 1] === nums[k]);
// 					do {
// 						l--;
// 					} while (nums[l] === nums[l + 1]);
// 				}
// 			}
// 		}
// 	}

// 	return result;
// }

function fourSum(nums: number[], target: number): number[][] {
	nums.sort((a, b) => a - b);
	const res = [];

	for (let i = 0; i < nums.length - 3; i++) {
		if (i > 0 && nums[i - 1] === nums[i]) continue;

		for (let j = i + 1; j < nums.length - 2; j++) {
			if (j > i + 1 && nums[j - 1] === nums[j]) continue;
			let l = j + 1,
				r = nums.length - 1;

			while (l < r) {
				let sum = nums[i] + nums[j] + nums[l] + nums[r];

				if (sum === target) {
					res.push([nums[i], nums[j], nums[l], nums[r]]);

					do r--;
					while (nums[r] === nums[r + 1]);

					do l++;
					while (nums[l] === nums[l - 1]);
				} else if (sum > target) {
					do {
						r--;
					} while (nums[r] === nums[r + 1]);
				} else {
					do l++;
					while (nums[l] === nums[l - 1]);
				}
			}
		}
	}

	return res;
}
