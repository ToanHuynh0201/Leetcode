class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function getDecimalValue(head: ListNode | null): number {
	let string: string = "";
	while (head !== null) {
		string += head.val;
		head = head.next;
	}

	return parseInt(string, 2);
}
