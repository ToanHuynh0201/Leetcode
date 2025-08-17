// function divideString(s: string, k: number, fill: string): string[] {
// 	let res: string[] = [];
// 	if (s === "") return res;

// 	for (let i = 0; i < s.length; i += k) {
// 		res.push(s.substring(i, i + k));
// 	}
// 	if (res[res.length - 1].length < k) {
// 		let left = k - res[res.length - 1].length;
// 		while (left > 0) {
// 			res[res.length - 1] += fill;
// 			left--;
// 		}
// 	}

// 	return res;
// }
function divideString(s: string, k: number, fill: string): string[] {
	let res: string[] = [];
	if (s === "") return res;

	for (let i = 0; i < s.length; i += k) {
		res.push(s.substring(i, i + k));
	}
	if (res[res.length - 1].length < k) {
		let left = k - res[res.length - 1].length;
		while (left > 0) {
			res[res.length - 1] += fill;
			left--;
		}
	}

	return res;
}
