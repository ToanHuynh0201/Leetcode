function maxProfit(prices: number[]): number {
	let res = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			if (Math.abs(prices[i] - prices[j]) > res && prices[i] < prices[j])
				res = Math.abs(prices[i] - prices[j]);
		}
	}

	return res;
}
