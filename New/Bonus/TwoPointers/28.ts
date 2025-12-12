function strStr(haystack: string, needle: string): number {
	const hLength = haystack.length;
	const nLength = needle.length;

	if (nLength === 0) return 0;
	if (hLength === 0) return -1;

	let nIndex: number;

	for (let i = 0; i < hLength; i++) {
		nIndex = 0;
		while (nIndex < nLength) {
			if (needle[nIndex] !== haystack[i + nIndex]) break;
			nIndex++;
		}

		if (nIndex == nLength) return i;
	}

    return -1;
}
