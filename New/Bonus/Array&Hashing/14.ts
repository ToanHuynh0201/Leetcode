function longestCommonPrefix(strs: string[]): string {
	strs.sort();
	let firstString = strs[0];
	let lastString = strs[strs.length - 1];
	let res = "";
	for (let i = 0; i < firstString.length; i++) {
		if (firstString[i] === lastString[i]) res += firstString[i];
		else break;
	}
	return res;
}
