function isPalindrome(s: string): boolean {
	const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

	let left = 0,
		right = newStr.length - 1;

	while (left < right) {
		if (newStr[left] === newStr[right]) {
			left++;
			right--;
		} else return false;
	}

	return true;
}
