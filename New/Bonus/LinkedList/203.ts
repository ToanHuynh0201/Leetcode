class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// function removeElements(head: ListNode | null, val: number): ListNode | null {
// 	if (!head) return null;
// 	if (head.val === val) return removeElements(head.next, val);
// 	head.next = removeElements(head.next, val);
// 	return head;
// }

function removeElements(head: ListNode | null, val: number): ListNode | null {
	if (!head) return null;
	let prev = new ListNode(0, head);
	let curr = prev;

	while (curr && curr.next) {
		if (curr.next.val === val) {
			curr.next = curr.next.next;
		} else curr = curr.next;
	}

	return prev.next;
}
