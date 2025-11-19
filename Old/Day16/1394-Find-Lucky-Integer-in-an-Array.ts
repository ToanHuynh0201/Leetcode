function findLucky(arr: number[]): number {
	const map = new Map<number, number>();

	for (const number of arr) {
		map.set(number, (map.get(number) ?? 0) + 1);
	}
	let res = -1;
	map.forEach((value, key) => {
		if (key === value && res < key) res = key;
	});

	return res;
}
