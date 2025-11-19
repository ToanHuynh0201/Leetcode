function isToeplitzMatrix(matrix: number[][]): boolean {
	const row = matrix.length;
	const col = matrix[0].length;

	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
		}
	}

	return true;
}
