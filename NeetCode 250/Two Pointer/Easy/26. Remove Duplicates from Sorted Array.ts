// function removeDuplicates(nums: number[]): number {
// 	let i = 0;
// 	for (let j = 1; j < nums.length; j++) {
// 		if (nums[j] !== nums[i]) {
// 			i++;
// 			nums[i] = nums[j];
// 		}
// 	}

// 	return i + 1;
// }

function removeDuplicates(nums: number[]): number {
	let res = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[res]) {
			res++;
			nums[res] = nums[i];
		}
	}

	return ++res;
}
