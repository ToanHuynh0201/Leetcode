function isValidSudoku(board: string[][]): boolean {
	for (let i = 0; i < 9; i++) {
		const rowSet = new Set();
		const colSet = new Set();
		const boxSet = new Set();

		for (let j = 0; j < 9; j++) {
			const rowElement = board[i][j];
			const colElement = board[j][i];
			const boxElementIndex1 = Math.floor(i / 3) * 3 + Math.floor(j / 3);
			const boxElementIndex2 = (i % 3) * 3 + (j % 3);
			const boxElement = board[boxElementIndex1][boxElementIndex2];
			if (rowElement !== ".") {
				if (rowSet.has(rowElement)) return false;

				rowSet.add(rowElement);
			}
			if (colElement !== ".") {
				if (colSet.has(colElement)) return false;

				colSet.add(colElement);
			}
			if (boxElement !== ".") {
				if (boxSet.has(boxElement)) return false;

				boxSet.add(boxElement);
			}
		}
	}

	return true;
}
