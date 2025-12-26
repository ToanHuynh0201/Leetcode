// function lengthOfLongestSubstring(s: string): number {
// 	if (s.length === 0) return 0;
// 	let res = 1;
// 	const set = new Set<string>(s[0]);
// 	let i = 0;
// 	for (let j = 1; j < s.length; j++) {
// 		while (set.has(s[j])) {
// 			set.delete(s[i]);
// 			i++;
// 		}
// 		set.add(s[j]);
// 		res = Math.max(res, j - i + 1);
// 	}
// 	return res;
// }
function lengthOfLongestSubstring(s: string): number {
	if (s.length === 0) return 0;

	let res = 1;
	const set = new Set<string>(s[0]);
	let i = 0;

	for (let j = 1; j < s.length; j++) {
		while (set.has(s[j])) {
			set.delete(s[i]);
			i++;
		}

		set.add(s[j]);
		res = Math.max(set.size, res);
	}
	return res;
}
