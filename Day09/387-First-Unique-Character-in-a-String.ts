function firstUniqChar(s: string): number {
	const map: Map<string, number> = new Map<string, number>();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], (map.get(s[i]) || 0) + 1);
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === 1) return i;
	}

	return -1;
}
