function isPalindrome2(x: number): boolean {
	if (x < 0) return false;

	let reverseNum = 0;
	let temp = x;
	while (temp > 0) {
		reverseNum = reverseNum * 10 + (x % 10);
		temp = Math.floor(temp / 10);
	}

	return x === reverseNum;
}
