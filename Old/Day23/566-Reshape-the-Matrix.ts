function matrixReshape(mat: number[][], r: number, c: number): number[][] {
	const arrayFromMatrix = mat.flat();
	if (arrayFromMatrix.length !== r * c) return mat;
	const res: number[][] = [];
	for (let i = 0; i < arrayFromMatrix.length; i += c) {
		res.push(arrayFromMatrix.slice(i, i + c));
	}

	return res;
}
