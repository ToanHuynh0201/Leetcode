// function findMin(nums: number[]): number {
// 	let left = 0;
// 	let right = nums.length - 1;
// 	while (left < right) {
// 		const mid = left + Math.floor((right - left) / 2);
// 		if (nums[mid] > nums[right]) {
// 			left = mid + 1;
// 		} else {
// 			right = mid;
// 		}
// 	}

// 	return nums[left];
// }
function findMin(nums: number[]): number {
	let left = 0;
	let right = nums.length - 1;
	let res = nums[left];
	while (left <= right) {
		if (nums[left] < nums[right]) {
			res = Math.min(res, nums[left]);
			break;
		}
		let mid = left + Math.floor((right - left) / 2);
		res = Math.min(res, nums[mid]);
		if (nums[mid] >= nums[left]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	
	return res;
}

[3, 4, 5, 6, 7, 0, 1, 2];
