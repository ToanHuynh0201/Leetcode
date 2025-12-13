// function maxArea(height: number[]): number {
// 	let ans = 0;
// 	let i = 0;
// 	let j = height.length - 1;
// 	while (i < j) {
// 		const length = Math.min(height[i], height[j]);
// 		const breadth = j - i;
// 		const area = length * breadth;

// 		ans = Math.max(ans, area);
// 		if (height[i] < height[j]) i++;
// 		else j--;
// 	}
// 	return ans;
// }

function maxArea(height: number[]): number {
	let res = 0;
	let i = 0;
	let j = height.length - 1;

	while (i < j) {
		const length = Math.min(height[i], height[j]);
		const breadth = j - i;
		const area = length * breadth;

		res = Math.max(area, res);
		if (height[i] < height[j]) i++;
		else j--;
	}

	return res;
}
