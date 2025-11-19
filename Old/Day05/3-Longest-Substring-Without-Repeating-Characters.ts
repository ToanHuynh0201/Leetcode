// function lengthOfLongestSubstring(s: string): number {
// 	const arr: string[] = [];
// 	let res = 0;

// 	for (let c of s) {
// 		const idx = arr.indexOf(c);
// 		if (idx !== -1) {
// 			arr.splice(0, idx + 1);
// 		}
// 		arr.push(c);
// 		res = Math.max(res, arr.length);
// 	}

// 	return res;
// }
function lengthOfLongestSubstring(s: string): number {
	const map = new Map<string, number>();
	let res = 0;
	let i = 0;

	for (let j = 0; j < s.length; j++) {
		const char = s[j];
		if (map.has(char) && map.get(char)! >= i) {
			i = map.get(char)! + 1;
		}

		map.set(char, j);
		res = Math.max(res, j - i + 1);
	}

	return res;
}
