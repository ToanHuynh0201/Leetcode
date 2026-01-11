function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	let res: number[] = [];
	arr.forEach((x, i) => {
		res.push(fn(x, i));
	});
	return res;
}
