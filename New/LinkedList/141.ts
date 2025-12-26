class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function hasCycle(head: ListNode | null): boolean {
	let pointerFast: ListNode | null = head;
	let pointerSlow: ListNode | null = head;
	while (pointerFast && pointerFast.next) {
		pointerSlow = pointerSlow!.next;
		pointerFast = pointerFast?.next.next;

		if (pointerSlow === pointerFast) return true;
	}

	return false;
}
