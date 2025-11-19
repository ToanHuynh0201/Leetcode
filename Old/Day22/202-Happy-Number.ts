function isHappy(n: number): boolean {
	const next = (x: number) => {
		let s = 0;
		while (x > 0) {
			const d = x % 10;
			s += d * d;
			x = Math.floor(x / 10);
		}

		return s;
	};

	let slow = n;
	let fast = n;

	while (true) {
		slow = next(slow);
		fast = next(next(fast));

		if (fast === 1) return true;
		if (slow === fast) break;
	}

	return slow === 1;
}
