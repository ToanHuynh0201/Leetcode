class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let res = new ListNode(0);
	let temp = res;
	let carry = 0;

	while (l1 || l2 || carry !== 0) {
		let val1 = l1 ? l1.val : 0;
		let val2 = l2 ? l2.val : 0;

		let sum = val1 + val2 + carry;
		carry = Math.floor(sum / 10);
		temp.next = new ListNode(sum % 10);
		temp = temp.next;

		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	return res.next;
}
