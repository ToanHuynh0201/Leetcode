type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
	const res: number[] = [];
	arr.forEach((value, index) => {
		if (fn(value, index)) res.push(value);
	});
	return res;
}
