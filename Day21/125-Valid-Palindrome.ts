function isPalindrome(s: string): boolean {
	if (s.trim() === "") return true;

	let str = "";

	const lowerString = s.toLocaleLowerCase();
	for (const char of lowerString) {
		if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
			str += char;
		}
	}

	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str.charCodeAt(left) === str.charCodeAt(right)) {
			left++;
			right--;
		} else {
			return false;
		}
	}

	return true;
}
