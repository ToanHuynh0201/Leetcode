function isAnagram1(s: string, t: string): boolean {
	//Kiểm tra nếu length không bằng thì cook
	if (s.length !== t.length) return false;
	const charCountMap = new Map<string, number>();

	for (let i = 0; i < s.length; i++) {
		charCountMap.set(s[i], (charCountMap.get(s[i]) || 0) + 1);
		charCountMap.set(t[i], (charCountMap.get(t[i]) || 0) - 1);
	}

	for (const count of charCountMap.values()) {
		if (count !== 0) {
			return false;
		}
	}
	return true;
}

function isAnagram2(s: string, t: string): boolean {
	//Kiểm tra nếu length không bằng thì cook
	if (s.length !== t.length) {
		return false;
	}

	const charArr: number[] = new Array<number>(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		charArr[s.charCodeAt(i) - 97]++;
		charArr[t.charCodeAt(i) - 97]--;
	}

	return charArr.every((val) => val === 0);
}
