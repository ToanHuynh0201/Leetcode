function trap(height: number[]): number {
	let res = 0;
	let l = 0,
		r = height.length - 1;
	let lMax = 0,
		rMax = 0;

	while (l < r) {
		if (height[l] <= height[r]) {
			if (height[l] < lMax) {
				res += lMax - height[l];
			} else {
				lMax = height[l];
			}
			l++;
		} else {
			if (height[r] < rMax) {
				res += rMax - height[r];
			} else {
				rMax = height[r];
			}
			r--;
		}
	}
	return res;
}
