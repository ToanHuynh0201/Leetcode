// function kthCharacter(k: number): string {
// 	let word = "a";
// 	while (word.length < k) {
// 		let nextPart = "";
// 		for (let char of word) {
// 			if (char === "z") {
// 				nextPart += "a";
// 			} else {
// 				nextPart += String.fromCharCode(char.charCodeAt(0) + 1);
// 			}
// 		}
// 		word += nextPart;
// 	}
// 	return word[k - 1];
// }
function kthCharacter(k: number): string {
	const getNextChar = (char: string): string =>
		char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);

	const find = (k: number): string => {
		if (k === 1) return "a";

		let length = 1;
		while (length < k) {
			length *= 2;
		}

		const prevK = k <= length / 2 ? k : k - length / 2;
		const char = find(prevK);

		return k <= length / 2 ? char : getNextChar(char);
	};

	return find(k);
}
