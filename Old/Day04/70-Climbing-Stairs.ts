function climbStairs(n: number): number {
	if (n <= 1) return 1;
	if (n == 2) return 2;

	const steps: number[] = new Array<number>(n + 1).fill(Number(0));
	steps[0] = 1;
	steps[1] = 1;
	for (let i = 2; i <= n; i++) {
		steps[i] = steps[i - 1] + steps[i - 2];
	}
	return steps[n];
}
