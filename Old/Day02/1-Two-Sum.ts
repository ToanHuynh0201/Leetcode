const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums: number[], target: number): number[] {
	const map: Map<number, number> = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const diff = target - num;
		const res = map.get(diff);

		if (res !== undefined) {
			return [i, res];
		}

		map.set(num, i);
	}
	return [];
}

twoSum(nums, target); // [0, 1]
