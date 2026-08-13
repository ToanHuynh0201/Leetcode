// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
// 	let p1 = m - 1;
// 	let p2 = n - 1;
// 	let p = m + n - 1;

// 	while (p1 >= 0 && p2 >= 0) {
// 		if (nums1[p1] >= nums2[p2]) {
// 			nums1[p] = nums1[p1];
// 			p1--;
// 		} else {
// 			nums1[p] = nums2[p2];
// 			p2--;
// 		}
// 		p--;
// 	}

// 	while (p2 >= 0) {
// 		nums1[p] = nums2[p2];
// 		p--;
// 		p2--;
// 	}
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let i = m - 1,
		j = n - 1,
		k = m + n - 1;

	while (j >= 0)
		nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
}
