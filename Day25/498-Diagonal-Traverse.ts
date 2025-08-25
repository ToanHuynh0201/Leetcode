function findDiagonalOrder(mat: number[][]): number[] {
	const res: number[] = [];
	const columnLength = mat.length;
	const rowLength = mat[0].length;

	for (let i = 0; i < columnLength + rowLength - 1; i++) {
		const temp: number[] = [];

		let row = i < rowLength ? 0 : i - rowLength + 1;
		let column = i < rowLength ? i : rowLength - 1;

		while (row < columnLength && column >= 0) {
			temp.push(mat[row][column]);
			row++;
			column--;
		}

		if (i % 2 === 0) {
			res.push(...temp.reverse());
		} else {
			res.push(...temp);
		}
	}

	return res;
}
