function findClosestElements(arr: number[], k: number, x: number): number[] {
	let left = 0,
		right = arr.length - 1;

	while (right - left >= k) {
		if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
			left++;
		} else {
			right--;
		}
	}

	return arr.slice(left, right + 1);
}
