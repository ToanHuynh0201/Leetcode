/*========================Sorting=======================*/

// function isAnagram(s: string, t: string): boolean {
// 	if (s.length !== t.length) return false;

// 	let sSort = s.split("").sort().join();
// 	let tSort = t.split("").sort().join();

// 	return sSort == tSort;
// }

/*========================Hash Map=======================*/
function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	const map = new Map<string, number>();
	for (let char of s) {
		map.set(char, (map.get(char) ?? 0) + 1);
	}
	for (let i = 0; i < t.length; i++) {
		if (!map.has(t[i]) || map.get(t[i]) === 0) return false;
		map.set(t[i], map.get(t[i])!! - 1);
	}
	return true;
}
