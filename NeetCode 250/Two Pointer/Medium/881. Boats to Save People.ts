function numRescueBoats(people: number[], limit: number): number {
	people.sort((a, b) => a - b);
	let count = 0;

	let left = 0,
		right = people.length - 1;

	while (left <= right) {
		if (people[left] + people[right] > limit) {
			right--;
			count++;
		} else if (people[left] + people[right] <= limit) {
			count++;
			left++;
			right--;
		}
	}

	return count;
}
