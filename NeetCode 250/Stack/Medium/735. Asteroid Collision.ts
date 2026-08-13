function asteroidCollision(asteroids: number[]): number[] {
	const res: number[] = [];
	for (let i = 0; i < asteroids.length; i++) {
		let temp = asteroids[i];

		while (res.length !== 0 && temp < 0 && res[res.length - 1] > 0) {
			const asteroid = res.pop()!;
			if (asteroid + temp === 0) temp = 0;
			else temp = asteroid + temp > 0 ? asteroid : temp;
		}
		if (temp) res.push(temp);
	}

	return res;
}
