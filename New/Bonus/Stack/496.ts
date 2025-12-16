function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	const greaterMap = new Map<number, number>();
	for (let i = 0; i < nums2.length; i++) {
		let next = -1;
		let j = i + 1;
		while (j < nums2.length) {
			if (nums2[j] > nums2[i]) {
				next = nums2[j];
				break;
			}
			j++;
		}
		greaterMap.set(nums2[i], next);
	}

	const res: number[] = [];
	for (let i = 0; i < nums1.length; i++) {
		if (greaterMap.has(nums1[i])) {
			res.push(greaterMap.get(nums1[i])!);
		}
	}

	return res;
}
