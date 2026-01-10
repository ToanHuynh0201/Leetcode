function numberOfEmployeesWhoMetTarget(
	hours: number[],
	target: number,
): number {
	return hours.reduce((total, curr) => {
		if (curr >= target) total += 1;
		return total;
	}, 0);
}
