function minEatingSpeed(piles: number[], h: number): number {
	let left = 1;
	let right = Math.max(...piles);
	let minBananaPerHour = right;

	while (left < right) {
		const k = Math.floor((left + right) >> 1);
		let hours = piles.reduce(
			(total, bananas) => total + Math.ceil(bananas / k),
			0,
		);

		if (hours <= h) {
			right = k;
			minBananaPerHour = k;
		} else {
			left = k + 1;
		}
	}

	return minBananaPerHour;
}
