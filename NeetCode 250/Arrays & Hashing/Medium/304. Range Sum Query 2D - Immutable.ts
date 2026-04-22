class NumMatrix {
	private prefix: number[][];
	constructor(matrix: number[][]) {
		const m = matrix.length;
		const n = matrix[0].length;

		// tạo matrix (m+1) x (n+1) để tránh if biên
		this.prefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

		for (let i = 1; i <= m; i++) {
			for (let j = 1; j <= n; j++) {
				this.prefix[i][j] =
					this.prefix[i - 1][j] +
					this.prefix[i][j - 1] -
					this.prefix[i - 1][j - 1] +
					matrix[i - 1][j - 1];
			}
		}
	}

	sumRegion(row1: number, col1: number, row2: number, col2: number): number {
		return (
			this.prefix[row2 + 1][col2 + 1] -
			this.prefix[row1][col2 + 1] -
			this.prefix[row2 + 1][col1] +
			this.prefix[row1][col1]
		);
	}
}
