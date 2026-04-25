function maxProfit(prices: number[]): number {
	let minPrice = Number.MAX_VALUE;
	let maxProfit = 0;

	for (const currPrice of prices) {
		minPrice = Math.min(currPrice, minPrice);
		maxProfit = Math.max(maxProfit, currPrice - minPrice);
	}

	return maxProfit;
}
