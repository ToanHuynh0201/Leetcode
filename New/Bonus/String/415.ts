function addStrings(num1: string, num2: string): string {
	let i = num1.length - 1;
	let j = num2.length - 1;
	let carry = 0;
	let res = "";

	while (i >= 0 || j >= 0 || carry !== 0) {
		if (j >= 0) carry += num2.charCodeAt(j--) - "0".charCodeAt(0);
		if (i >= 0) carry += num1.charCodeAt(i--) - "0".charCodeAt(0);
		res = (carry % 10) + res;
		carry = Math.floor(carry / 10);
	}

	return res;
}
