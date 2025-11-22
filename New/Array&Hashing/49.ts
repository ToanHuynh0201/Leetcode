function groupAnagrams(strs: string[]): string[][] {
	const stringMap = new Map<string, string[]>();

	for (let i = 0; i < strs.length; i++) {
		const sortedString = strs[i].split("").sort().join("");

		if (!stringMap.has(sortedString)) {
			stringMap.set(sortedString, [strs[i]]);
		} else {
			const prevStringArray = stringMap.get(sortedString);
			prevStringArray?.push(strs[i]);
			stringMap.set(sortedString, prevStringArray!);
		}
	}

	return Array.from(stringMap.values());
}
