/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	if (k === 0) return;

	const n = nums.length;
	k = k % n;

	const temp = nums.splice(0, n - k);

	nums.splice(nums.length, 0, ...temp);
}
