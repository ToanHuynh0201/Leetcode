function isPalindrome(s: string): boolean {
	const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

	const n = newStr.length;
	for (let i = 0; i < n / 2; i++) {
		if (newStr[i] !== newStr[n - i - 1]) return false;
	}
	return true;
}
