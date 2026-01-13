class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val: number, next: ListNode | null = null) {
		this.val = val;
		this.next = next;
	}
}

function traverse(head: ListNode | null) {
	let curr = head;
	while (curr !== null) {
		console.log(curr.val);
		curr = curr.next;
	}
}

function insertAtHead(head: ListNode | null, val: number): ListNode {
	const node = new ListNode(val);
	node.next = head;
	return node; // new head
}

function insertAtTail(head: ListNode | null, val: number): ListNode {
	const node = new ListNode(val);
	if (!head) return node;

	let curr = head;
	while (curr.next !== null) curr = curr.next;
	curr.next = node;
	return head;
}

function insertAtPosition(
	head: ListNode | null,
	val: number,
	k: number,
): ListNode | null {
	if (k === 0) return insertAtHead(head, val);

	let curr = head;
	for (let i = 0; i < k - 1 && curr !== null; i++) {
		curr = curr.next;
	}

	if (curr === null) return head;

	const node = new ListNode(val);
	node.next = curr.next;
	curr.next = node;

	return head;
}

function deleteHead(head: ListNode | null): ListNode | null {
	if (!head) return null;
	return head.next;
}

function deleteTail(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return null;

	let curr = head;
	while (curr.next!.next !== null) curr = curr.next!;
	curr.next = null;
	return head;
}
function deleteByValue(head: ListNode | null, val: number): ListNode | null {
	if (!head) return null;
	if (head.val === val) return head.next;

	let curr = head;
	while (curr.next && curr.next.val !== val) curr = curr.next;

	if (curr.next) curr.next = curr.next.next;
	return head;
}
function search(head: ListNode | null, val: number): boolean {
	let curr = head;
	while (curr !== null) {
		if (curr.val === val) return true;
		curr = curr.next;
	}
	return false;
}
function reverse(head: ListNode | null): ListNode | null {
	let prev = null;
	let curr = head;

	while (curr !== null) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}
