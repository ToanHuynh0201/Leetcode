class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 Do not return anything, modify head in-place instead.
 */
// function reorderList(head: ListNode | null): void {
// 	let fast = head;
// 	let slow = head;

// 	while (fast && fast.next) {
// 		slow = slow!.next;
// 		fast = fast.next.next;
// 	}

// 	let second = slow!.next;
// 	slow!.next = null;

// 	let prev: ListNode | null = null;

// 	while (second) {
// 		const next = second?.next;
// 		second.next = prev;
// 		prev = second;
// 		second = next!;
// 	}

// 	let reversedSecond = prev;

// 	let first = head;

// 	while (reversedSecond) {
// 		const tmp1 = first!.next;
// 		const tmp2 = reversedSecond!.next;

// 		first!.next = reversedSecond;
// 		reversedSecond!.next = tmp1;
// 		first = tmp1;
// 		reversedSecond = tmp2;
// 	}
// }
function reorderList(head: ListNode | null): void {
	let fast: ListNode | null = head;
	let slow: ListNode | null = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow!.next;
	}

	let second = slow!.next;
	slow!.next = null;

	let prev: ListNode | null = null;

	while (second) {
		const next = second.next;
		second.next = prev;
		prev = second;
		second = next;
	}

	let reversedSecond = prev;
	let first = head;
	while (reversedSecond) {
		const tmp1 = first!.next;
		const tmp2 = reversedSecond!.next;

		first!.next = reversedSecond;
		reversedSecond!.next = tmp1;
		first = tmp1;
		reversedSecond = tmp2;
	}
}
