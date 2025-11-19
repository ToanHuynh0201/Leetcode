function longestCommonPrefix2(strs: string[]): string {
	if (!strs.length) return "";

	strs.sort();
	let first = strs[0];
	let last = strs[strs.length - 1];

	let res = "";
	for (let i = 0; i < first.length; i++) {
		if (first[i] == last[i]) res += first[i];
		else break;
	}
	return res;
}
