function reverseString(s: string[]): void {
	let left = 0;
	for (let right = s.length - 1; left < right; right--, left++) {
		[s[left], s[right]] = [s[right], s[left]];
	}
}
