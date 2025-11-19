// class ListNode {
// 	val: number;
// 	next: ListNode | null;
// 	constructor(val?: number, next?: ListNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.next = next === undefined ? null : next;
// 	}
// }

function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
): ListNode | null {
    if (!headA || !headB) return null;

    let dummy1: ListNode | null = headA;
    let dummy2: ListNode | null = headB;

    while (dummy1 !== dummy2) {
        dummy1 = dummy1 ? dummy1.next : headB;
        dummy2 = dummy2 ? dummy2.next : headA;
    }

    return dummy1;
}
