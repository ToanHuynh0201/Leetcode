class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// function getDecimalValue(head: ListNode | null): number {
// 	let string: string = "";
// 	while (head !== null) {
// 		string += head.val;
// 		head = head.next;
// 	}

// 	return parseInt(string, 2);
// }
function getDecimalValue(head: ListNode | null): number {
	let stringNumber: string = "";
	while (head) {
		stringNumber += head.val;
		head = head.next;
	}

	return parseInt(stringNumber, 2);
}
