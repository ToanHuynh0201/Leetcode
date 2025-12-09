// function maxProfit(prices: number[]): number {
// 	let minPrice = Number.MAX_VALUE;
// 	let maxProfit = 0;

// 	for (let currPrice of prices) {
// 		minPrice = Math.min(currPrice, minPrice);
// 		maxProfit = Math.max(maxProfit, currPrice - minPrice);
// 	}

// 	return maxProfit;
// }
function maxProfit(prices: number[]): number {
	let left = 0;
	let maxProfit = 0;
	for (let right = 1; right < prices.length; right++) {
		if (prices[right] > prices[left]) {
			maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
		} else {
			left = right;
		}
	}
	return maxProfit;
}
