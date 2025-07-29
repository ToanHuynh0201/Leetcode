// function removeDuplicates(nums: number[]): number {
// 	if (nums.length === 0) return 0;
// 	let res: number = 1;

// 	for (let i = 1; i < nums.length; i++) {
// 		if (nums[i] !== nums[i - 1]) {
// 			nums[res] = nums[i];
// 		}
// 	}
// 	return res;
// }
function removeDuplicates(nums: number[]): number {
	if (nums.length === 0 || nums.length === 1) return nums.length;

	let uniqueIndex = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[uniqueIndex]) {
			uniqueIndex++;
			nums[uniqueIndex] = nums[i];
		}
	}

	return uniqueIndex + 1;
}
