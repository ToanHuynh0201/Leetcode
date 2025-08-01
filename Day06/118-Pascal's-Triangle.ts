function generate(numRows: number): number[][] {
	const res: number[][] = [];
	for (let i = 0; i < numRows; i++) {
		const row: number[] = new Array(i + 1).fill(1);
		for (let j = 1; j < i; j++) {
			row[j] = res[i - 1][j - 1] + res[i - 1][j];
		}
		res.push(row);
	}
	return res;
}
