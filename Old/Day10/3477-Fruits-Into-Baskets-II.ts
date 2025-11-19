// function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
// 	let res = 0;
// 	const n = baskets.length;
// 	for (const fruit of fruits) {
// 		let unpack = 1;
// 		for (let i = 0; i < n; i++) {
// 			if (fruit <= baskets[i]) {
// 				unpack = 0;
// 				baskets[i] = 0;
// 				break;
// 			}
// 		}

// 		res += unpack;
// 	}
// 	return res;
// }
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
	let res = 0;
	const length = baskets.length;
	for (const fruit of fruits) {
		let unpack = 1;
		for (let i = 0; i < length; i++)
			if (fruit <= baskets[i]) {
				unpack = 0;
				baskets[i] = 0;
				break;
			}

		res += unpack;
	}

	return res;
}
