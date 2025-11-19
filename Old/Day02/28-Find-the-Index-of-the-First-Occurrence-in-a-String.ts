function strStr(haystack: string, needle: string): number {
	const haystackLength = haystack.length;
	const needleLength = needle.length;

	if (needleLength === 0) return 0;
	if (haystackLength === 0) return -1;

	let needleIndex: number;

	for (let i = 0; i < haystackLength; i++) {
		needleIndex = 0;
		while (needleIndex < needleLength) {
			if (needle[needleIndex] !== haystack[i + needleIndex]) break;
			needleIndex++;
		}

		if (needleIndex == needleLength) return i;
	}
	return -1;
}
