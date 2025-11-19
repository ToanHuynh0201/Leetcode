// function isValid(word: string): boolean {
// 	if (word.length < 3) return false;

// 	let hasVowel: boolean = false;
// 	let hasConsonant: boolean = false;

// 	const vowelSet = new Set(["a", "e", "i", "o", "u"]);

// 	for (let i = 0; i < word.length; i++) {
// 		if (!/^[a-zA-Z0-9]+$/.test(word.charAt(i))) {
// 			return false;
// 		}

// 		if (/\d/.test(word.charAt(i))) continue;

// 		if (!hasVowel && vowelSet.has(word.charAt(i).toLowerCase())) {
// 			hasVowel = true;
// 		}

// 		if (
// 			!hasConsonant &&
// 			!vowelSet.has(word.charAt(i).toLocaleLowerCase())
// 		) {
// 			hasConsonant = true;
// 		}
// 	}

// 	return hasConsonant && hasVowel;
// }
function isValid(word: string): boolean {
	if (word.length < 3) return false;
	let hasVowel: boolean = false;
	let hasConsonant: boolean = false;
	const vowelSet = new Set(["a", "e", "i", "o", "u"]);
	for (let i = 0; i < word.length; i++) {
		if (!/^[a-zA-Z0-9]+$/.test(word.charAt(i))) return false;

		if (/\d/.test(word.charAt(i))) continue;

		if (!hasVowel && vowelSet.has(word.charAt(i).toLocaleLowerCase()))
			hasVowel = true;

		if (!hasConsonant && !vowelSet.has(word.charAt(i).toLocaleLowerCase()))
			hasConsonant = true;
	}

	return hasConsonant && hasVowel;
}
