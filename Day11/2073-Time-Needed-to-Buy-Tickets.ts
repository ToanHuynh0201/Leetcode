function timeRequiredToBuy(tickets: number[], k: number): number {
	let seconds = 0;
	let i = 0;

	while (tickets[k] !== 0) {
		if (tickets[i] !== 0) {
			tickets[i]--;
			seconds++;
		}

		i = i + 1 >= tickets.length ? 0 : i + 1;
	}

	return seconds;
}
