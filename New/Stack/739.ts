// function dailyTemperatures(temperatures: number[]): number[] {
// 	const res: number[] = [];

// 	for (let i = 0; i < temperatures.length; i++) {
// 		let days = 0;
// 		for (let j = i + 1; j < temperatures.length; j++) {
// 			if (temperatures[j] > temperatures[i]) {
// 				days = j - i;
// 				break;
// 			}
// 		}
// 		res.push(days);
// 	}

// 	return res;
// }
function dailyTemperatures(temperatures: number[]): number[] {
	const helperStack: number[] = [];
	const result: number[] = new Array(temperatures.length).fill(0);

	for (let i = 0; i < temperatures.length; i++) {
		while (
			helperStack.length > 0 &&
			temperatures[helperStack[helperStack.length - 1]] < temperatures[i]
		) {
			const index = helperStack.pop()!;
			result[index] = i - index;
		}
		helperStack.push(i);
	}

	return result;
}
