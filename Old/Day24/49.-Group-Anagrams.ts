function groupAnagrams(strs: string[]): string[][] {
	const stringMap = new Map<string, string[]>();

	for (let i = 0; i < strs.length; i++) {
		const sortedString = strs[i].split("").sort().join("");

		if (!stringMap.has(sortedString)) {
			stringMap.set(sortedString, [strs[i]]);
		} else {
			const prevArr = stringMap.get(sortedString);
			prevArr?.push(strs[i]);
			stringMap.set(sortedString, prevArr!);
		}
	}

	return Array.from(stringMap.values());
}
