function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	const greaterMap = new Map<number, number>();
	const stack: number[] = [];

	for (const num of nums2) {
		while (stack.length > 0 && stack[stack.length - 1] < num) {
			const smaller = stack.pop()!;
			greaterMap.set(smaller, num);
		}

		stack.push(num);
	}

	while (stack.length > 0) {
		greaterMap.set(stack.pop()!, -1);
	}

	return nums1.map((n) => greaterMap.get(n)!);
}
