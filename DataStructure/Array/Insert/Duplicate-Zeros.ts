/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
	const temp = [];
	let length = arr.length;

	for (let i = 0; i < length; i++) {
		temp.push(arr[i]);

		if (arr[i] === 0) {
			temp.push(0);
			length--;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = temp[i];
	}
}
