class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return head;

	let prev = head;
	let cur = head.next;

	while (cur) {
		while (cur && cur.val === prev.val) cur = cur.next as ListNode;

		prev.next = cur;
		prev = cur;

		if (cur) {
			cur = cur.next as ListNode;
		}
	}

	return head;
}
