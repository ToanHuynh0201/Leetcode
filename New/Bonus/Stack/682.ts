function calPoints(operations: string[]): number {
	const res: number[] = [];

	for (let i = 0; i < operations.length; i++) {
		switch (operations[i]) {
			case "+":
				res.push(res[res.length - 2] + res[res.length - 1]);
				break;
			case "D":
				res.push(res[res.length - 1] * 2);
				break;
			case "C":
				res.pop();
				break;
			default:
				res.push(+operations[i]);
		}
	}
	return res.reduce((acc, number) => acc + number, 0);
}
