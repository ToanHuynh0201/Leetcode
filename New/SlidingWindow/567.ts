function checkInclusion(s1: string, s2: string): boolean {
	const arr = Array(26).fill(0);
	const isPermutation = () => arr.every((arr) => arr === 0);

	for (const char of s1) arr[char.charCodeAt(0) - 97]++;

	for (let i = 0; i < s2.length; i++) {
		arr[s2[i].charCodeAt(0) - 97]--;

		if (i >= s1.length) {
			arr[s2[i - s1.length].charCodeAt(0) - 97]++;
		}

		if (isPermutation()) return true;
	}
	return false;
}
