class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function swapPairs(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;

	let NewHead: ListNode | null = null;
	let prev: ListNode | null = null;
	let curr: ListNode | null = head;

    while(curr && curr.next) {
        
    }
	return NewHead;
}
