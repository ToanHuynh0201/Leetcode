function search(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (nums[mid] === target) return mid;
		if (nums[mid] < nums[right]) {
			//right sorted
			if (target > nums[mid] && target <= nums[right]) left = mid + 1;
			else right = mid - 1;
		} else {
			//left sorted
			if (target < nums[mid] && target >= nums[left]) right = mid - 1;
			else left = mid + 1;
		}
	}
	return -1;
}

[3, 4, 5, 6, 7, 0, 1, 2];
