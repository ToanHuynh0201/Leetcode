// function productExceptSelf(nums: number[]): number[] {
// 	const result = Array(nums.length).fill(1);

// 	for (let i = 1; i < nums.length; i++) {
// 		result[i] = result[i - 1] * nums[i - 1];
// 	}
// 	let right = 1;

// 	for (let i = nums.length - 1; i >= 0; i--) {
// 		result[i] *= right;
// 		right = nums[i];
// 	}

// 	return result;
// }

// function productExceptSelf(nums: number[]): number[] {
// 	const n = nums.length;
// 	const pre = Array(n).fill(1);
// 	const post = Array(n).fill(1);

// 	for (let i = 1; i < n; i++) {
// 		pre[i] = pre[i - 1] * nums[i - 1];
// 	}

// 	for (let i = n - 2; i >= 0; i--) {
// 		post[i] = post[i + 1] * nums[i + 1];
// 	}

// 	return pre.map((value, index) => value * post[index]);
// }

function productExceptSelf(nums: number[]): number[] {
	const n = nums.length;
	const result = Array(n).fill(1);
	for (let i = 1; i < n; i++) {
		result[i] = result[i - 1] * nums[i - 1];
	}

	let post = 1;
	for (let i = n - 1; i >= 0; i--) {
		result[i] *= post;
		post *= nums[i];
	}

	return result;
}
