// function evalRPN(tokens: string[]): number {
// 	type Operator = "+" | "-" | "*" | "/";
// 	const op: Record<Operator, (x: number, y: number) => number> = {
// 		"+": function add(x: number, y: number) {
// 			return x + y;
// 		},
// 		"-": function sub(x: number, y: number) {
// 			return x - y;
// 		},
// 		"*": function mul(x: number, y: number) {
// 			return x * y;
// 		},
// 		"/": function div(x: number, y: number) {
// 			return (x / y) >> 0;
// 		},
// 	};

// 	const a: string[] = [];
// 	for (const t of tokens) {
// 		const z = parseInt(t, 10);
// 		if (Number.isNaN(z)) {
// 			const y = Number(a.pop()!);
// 			const x = Number(a.pop()!);
// 			a.push(op[t as Operator](x, y).toString());
// 		} else {
// 			a.push(z.toString());
// 		}
// 	}
// 	return Number(a.pop());
// }
function evalRPN(tokens: string[]): number {
	type Operator = "+" | "-" | "*" | "/";

	const op: Record<Operator, (x: number, y: number) => number> = {
		"+": function add(x: number, y: number) {
			return x + y;
		},
		"-": function sub(x: number, y: number) {
			return x - y;
		},
		"*": function mul(x: number, y: number) {
			return x * y;
		},
		"/": function div(x: number, y: number) {
			return (x / y) >> 0;
		},
	};

	const a: string[] = [];
	for (const t of tokens) {
		const z = parseInt(t);
		if (Number.isNaN(z)) {
			const x = Number(a.pop()!);
			const y = Number(a.pop()!);
			a.push(op[t as Operator](y, x).toString());
		} else {
			a.push(z.toString());
		}
	}
	return Number(a.pop()!);
}
