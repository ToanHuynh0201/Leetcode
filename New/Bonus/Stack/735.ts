function asteroidCollision(asteroids: number[]): number[] {
	const res: number[] = [];
	for (let i = 0; i < asteroids.length; i++) {
		let remain = asteroids[i];
		while (res.length !== 0 && remain < 0 && res[res.length - 1] > 0) {
			const asteroid = res.pop();
			if (asteroid! + remain === 0) remain = 0;
			else remain = asteroid! + remain > 0 ? asteroid! : remain;
		}
		if (remain) res.push(remain);
	}
	return res;
}
