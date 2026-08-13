// function maxProfit(prices: number[]): number {
// 	let minPrice = Number.MAX_VALUE;
// 	let maxProfit = 0;

// 	for (const currPrice of prices) {
// 		minPrice = Math.min(currPrice, minPrice);
// 		maxProfit = Math.max(maxProfit, currPrice - minPrice);
// 	}

// 	return maxProfit;
// }

function maxProfit(prices: number[]): number {
	let res = 0;
	let min = Number.MAX_SAFE_INTEGER;

	for (const curr of prices) {
		min = Math.min(min, curr);
		res = Math.max(res, curr - min);
	}
	return res;
}
