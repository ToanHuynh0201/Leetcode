// function searchMatrix(matrix: number[][], target: number): boolean {
// 	const m: number = matrix.length;
// 	const n: number = matrix[0].length;
// 	let left = 0;
// 	let right = m * n - 1;

// 	while (left <= right) {
// 		const mid = (right + left) >> 1;

// 		const x = Math.floor(mid / n);
// 		const y = mid % n;
// 		const midValue: number = matrix[x][y];

// 		if (midValue === target) {
// 			return true;
// 		} else if (midValue < target) {
// 			left = mid + 1;
// 		} else {
// 			right = mid - 1;
// 		}
// 	}

// 	return false;
// }

function searchMatrix(matrix: number[][], target: number): boolean {
	const m: number = matrix.length;
	const n: number = matrix[0].length;

	let left = 0;
	let right = m * n - 1;

	while (left <= right) {
		const mid = left + (right - left) / 2;

		const x = Math.floor(mid / 3);
		const y = mid % n;

		const midValue = matrix[x][y];

		if (midValue === target) return true;
		else if (midValue < target) left = mid + 1;
		else right = mid - 1;
	}

	return false;
}
