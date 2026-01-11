type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
	let val = init;
	nums.forEach((value) => {
		val = fn(val, value);
	});
	return val;
}
