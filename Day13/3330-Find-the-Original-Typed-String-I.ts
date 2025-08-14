// function possibleStringCount(word: string): number {
// 	let res = 1;
// 	let last = word[word.length - 1];

// 	for (let i = word.length - 2; i >= 0; i--) {
// 		if (word[i] === last) {
// 			word.slice(0, -1);
// 			res++;
// 		} else if (word[i] !== last) {
// 			last = word[i];
// 		}
// 	}

// 	return res;
// }

function possibleStringCount(word: string): number {
	let res = 1;
	let last = word[word.length - 1];

	for (let i = word.length - 2; i >= 0; i--) {
		if (word[i] === last) {
			word.slice(0, -1);
			res++;
		} else if (word[i] !== last) last = word[i];
	}

	return res;
}
// function possibleStringCount(word: string): number {
// 	const regex = /([a-zA-Z])\1+/g;
// 	if (!word.match(regex)) return 1;

// 	const matches = word.match(regex);

// 	return (
// 		matches!.reduce(
// 			(accumulator, currentValue) => accumulator + currentValue.length,
// 			0
// 		) -
// 		(matches!.length - 1)
// 	);
// }
