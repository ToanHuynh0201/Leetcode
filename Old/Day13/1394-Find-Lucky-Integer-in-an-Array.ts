function findLucky(arr: number[]): number {
	const map = new Map<number, number>();

	let res = Number.MIN_SAFE_INTEGER;

	for (const number of arr) {
		map.set(number, (map.get(number) ?? 0) + 1);
	}

	for (const [num, count] of map) {
		if (num === count && num > res) {
			res = num;
		}
	}

	return res === Number.MIN_SAFE_INTEGER ? -1 : res;
}
