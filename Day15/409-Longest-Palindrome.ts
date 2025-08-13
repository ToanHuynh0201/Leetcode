function longestPalindrome(s: string): number {
	const countCharMap = new Map<string, number>();

	for (const c of s) {
		countCharMap.set(c, (countCharMap.get(c) || 0) + 1);
	}

	let length = 0;
	let hasOdd = false;

	for (const [char, count] of countCharMap) {
		if (count % 2 === 0) {
			length += count;
		} else {
			length += count - 1;
			hasOdd = true;
		}
	}

	if (hasOdd) length += 1;

	return length;
}
