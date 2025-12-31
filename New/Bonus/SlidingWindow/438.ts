function findAnagrams(s: string, p: string): number[] {
	const sLength = s.length;
	const pLength = p.length;

	if (sLength < pLength) return [];
	const res: number[] = [];

	const sCount = new Array(26).fill(0);
	const pCount = new Array(26).fill(0);

	const idx = (ch: string) => ch.charCodeAt(0) - "a".charCodeAt(0);

	for (let i = 0; i < pLength; i++) {
		pCount[idx(p[i])]++;
		sCount[idx(s[i])]++;
	}

	if (arraysEqual(pCount, sCount)) res.push(0);
	for (let i = pLength; i < sLength; i++) {
		sCount[idx(s[i])]++;
		sCount[idx(s[i - pLength])]--;

		if (arraysEqual(pCount, sCount)) {
			res.push(i - pLength + 1);
		}
	}
	return res;
}

function arraysEqual(a: number[], b: number[]): boolean {
	for (let i = 0; i < 26; i++) {
		if (a[i] !== b[i]) return false;
	}

	return true;
}
