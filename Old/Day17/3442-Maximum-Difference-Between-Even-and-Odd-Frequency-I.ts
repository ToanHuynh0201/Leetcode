// function maxDifference(s: string): number {
// 	const map = new Map<string, number>();
// 	for (const num of s) map.set(num, (map.get(num) ?? 0) + 1);

// 	const values = Array.from(map.values());

// 	const maxOdd = Math.max(...values.filter((v) => v % 2 !== 0));
// 	const minEven = Math.min(...values.filter((v) => v % 2 === 0));

// 	return maxOdd - minEven;
// }
function maxDifference(s: string): number {
	const map = new Map<string, number>();
	for (const char of s) map.set(char, (map.get(char) ?? 0) + 1);
	const values = Array.from(map.values());
	const maxOdd = Math.max(...values.filter((v) => v % 2 === 1));
	const minEven = Math.min(...values.filter((v) => v % 2 === 0));
	return maxOdd - minEven;
}
