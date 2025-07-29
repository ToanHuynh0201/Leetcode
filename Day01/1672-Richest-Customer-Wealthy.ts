const accounts = [
	[2, 8, 7],
	[7, 1, 3],
	[1, 9, 5],
];
function maximumWealth(accounts: number[][]): number {
	let maxWealth = 0;

	for (const account of accounts) {
		const wealth = account.reduce((sum, value) => sum + value);
		if (wealth > maxWealth) {
			maxWealth = wealth;
		}
	}

	return maxWealth;
}
