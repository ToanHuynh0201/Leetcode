function isPalindrome(s: string): boolean {
	const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

	return newStr === newStr.split("").reverse().join("");
}
