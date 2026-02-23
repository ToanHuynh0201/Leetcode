// function majorityElement(nums: number[]): number {
// 	let candidate = 0;
// 	let count = 0;

// 	for (const num of nums) {
// 		if (count === 0) candidate = num;

// 		count += num === candidate ? 1 : -1;
// 	}

// 	return candidate;
// }
function majorityElement(nums: number[]): number {
	const sortedNums = nums.sort((a, b) => a - b);

	let middleIndex = Math.floor(sortedNums.length / 2);

	return sortedNums[middleIndex];
}
