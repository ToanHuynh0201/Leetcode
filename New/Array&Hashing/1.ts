// function twoSum(nums: number[], target: number): number[] {
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) return [i, j];
// 		}
// 	}

// 	return [];
// }

// function twoSum(nums: number[], target: number): number[] {
// 	const map: Map<number, number> = new Map<number, number>();

// 	for (let i = 0; i < nums.length; i++) {
// 		map.set(nums[i], i);
// 	}

// 	for (let i = 0; i < nums.length; i++) {
// 		let diff = target - nums[i];
// 		let res = map.get(diff);

// 		if (res && res !== i) {
// 			return [i, res];
// 		}
// 	}

// 	return [];
// }

function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const diff = target - num;
		const res = map.get(diff);

		if (res !== undefined) return [i, res];

		map.set(num, i);
	}

	return [];
}
