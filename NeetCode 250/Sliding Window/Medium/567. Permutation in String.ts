function checkInclusion(s1: string, s2: string): boolean {
	let arr = new Array(26).fill(0);
	const isPermutaion = () => arr.every((c) => c === 0);

	for (const char of s1) arr[char.charCodeAt(0) - 97]++;

	for (let i = 0; i < s2.length; i++) {
		arr[s2[i].charCodeAt(0) - 97]--;
		if (i >= s1.length) {
			arr[s2[i - s1.length].charCodeAt(0) - 97]++;
		}

		if (isPermutaion()) return true;
	}

	return false;
}
