function longestPalindrome(s: string): number {
	const map = new Map<string, number>();
	let res = 0;
	for (const char of s) {
		map.set(char, (map.get(char) ?? 0) + 1);
	}
	let hasOdd = false;
	for (const num of map.values()) {
		if (num % 2 === 0) res += num;
		else {
			res += num - 1;
			hasOdd = true;
		}
	}

	return hasOdd ? ++res : res;
}
