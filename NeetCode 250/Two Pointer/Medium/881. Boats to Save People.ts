// function numRescueBoats(people: number[], limit: number): number {
// 	people.sort((a, b) => a - b);
// 	let count = 0;

// 	let left = 0,
// 		right = people.length - 1;

// 	while (left <= right) {
// 		if (people[left] + people[right] > limit) {
// 			right--;
// 			count++;
// 		} else if (people[left] + people[right] <= limit) {
// 			count++;
// 			left++;
// 			right--;
// 		}
// 	}

// 	return count;
// }

function numRescueBoats(people: number[], limit: number): number {
	people.sort((a, b) => a - b);
	let count = 0;

	let left = 0,
		right = people.length - 1;

	while (left <= right) {
		const sum = people[left] + people[right];
		if (sum > limit) {
			right--;
			count++; //Because take 1 people at right before -1
		} else if (sum <= limit) {
			count++;
			left++;
			right--;
		}
	}
	return count;
}
