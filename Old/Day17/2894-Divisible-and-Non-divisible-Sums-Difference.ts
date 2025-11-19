function differenceOfSums(n: number, m: number): number {
	let nonDivisibleSum = 0;
	let divisibleSum = 0;

	for (let i = 1; i <= n; i++) {
		if (i % m === 0) divisibleSum += i;
		else nonDivisibleSum += i;
	}

	return nonDivisibleSum - divisibleSum;
}
