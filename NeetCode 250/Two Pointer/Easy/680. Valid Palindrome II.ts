function validPalindrome(s: string): boolean {
	function isValidPalindrome(s: string): boolean {
		let left = 0,
			right = s.length - 1;

		while (left < right) {
			if (s[left] === s[right]) {
				left++;
				right--;
			} else return false;
		}
		return true;
	}

	let left = 0,
		right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			return (
				isValidPalindrome(s.slice(left + 1, right + 1)) ||
				isValidPalindrome(s.slice(left, right))
			);
		}
		left++;
		right--;
	}

	return true;
}
