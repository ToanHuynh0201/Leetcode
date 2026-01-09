function addToArrayForm(num: number[], k: number): number[] {
	return String(BigInt(num.join("")) + BigInt(k))
		.split("")
		.map((v) => +v);
}
