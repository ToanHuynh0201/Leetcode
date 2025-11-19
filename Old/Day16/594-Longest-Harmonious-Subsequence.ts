// function findLHS(nums: number[]): number {
// 	const frequencyMap = new Map<number, number>();

// 	for (const num of nums)
// 		frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);

// 	let res = 0;

// 	for (let [num, count] of frequencyMap.entries()) {
// 		if (frequencyMap.has(num + 1)) {
// 			const currentLength = count + frequencyMap.get(num + 1)!;
// 			res = Math.max(res, currentLength);
// 		}
// 	}

// 	return res;
// }

function findLHS(nums: number[]): number {
	const totalItemCount = nums.length;
	if (totalItemCount < 2) return 0;

	const sortedItems = new Int32Array(nums);
	sortedItems.sort();

	let maximumHarmoniousSubsequenceLength = 0;
	let leftPointer = 0;

	for (let rightPointer = 0; rightPointer < totalItemCount; rightPointer++) {
		while (sortedItems[rightPointer] - sortedItems[leftPointer] > 1) {
			leftPointer++;
		}

		if (sortedItems[rightPointer] - sortedItems[leftPointer] === 1) {
			const currentWindowLength = rightPointer - leftPointer + 1;
			maximumHarmoniousSubsequenceLength = Math.max(
				currentWindowLength,
				maximumHarmoniousSubsequenceLength
			);
		}
	}

	return maximumHarmoniousSubsequenceLength;
}
