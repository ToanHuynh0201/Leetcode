function characterReplacement(s: string, k: number): number {
	const map = new Map<string, number>();
	let maxFreq = 0;
	let longest = 0;
	let leftPointer = 0;

	for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
		map.set(s[rightPointer], (map.get(s[rightPointer]) || 0) + 1);

		maxFreq = Math.max(maxFreq, map.get(s[rightPointer])!);

		if (maxFreq + k < rightPointer - leftPointer + 1) {
			map.set(s[leftPointer], map.get(s[leftPointer])! - 1);
			leftPointer++;
		}

		longest = Math.max(longest, rightPointer - leftPointer + 1);
	}

	return longest;
}
