/*========================Sorting + Two Pointers=======================*/
// function containsDuplicate(nums: number[]): boolean {
// 	nums.sort((a, b) => a - b);

// 	for (let i = 0; i < nums.length - 1; i++) {
// 		if (nums[i] === nums[i + 1]) return true;
// 	}

// 	return false;
// }

/*========================Brute force=======================*/
// function containsDuplicate(nums: number[]): boolean {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] === nums[j]) return true;
// 		}
// 	}
// 	return false;
// }

/*========================Hash Set=======================*/
function containsDuplicate(nums: number[]): boolean {
	const map = new Map<number, number>();

	for (const num of nums) {
		if (map.has(num)) return true;
		map.set(num, 1);
	}

	return false;
}
