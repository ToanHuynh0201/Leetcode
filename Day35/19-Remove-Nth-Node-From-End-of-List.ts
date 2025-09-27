class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const findLength = (head: ListNode | null): number => {
        let count = 0;
        if (head === null) return count;
        let curr = head;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count;
    };
    let length = findLength(head);

    let i = 0;
    let traverseTill = length - n - 1;

    if (traverseTill === -1) return head.next;
    let curr = head;
    while (i < traverseTill) {
        curr = curr.next;
        i++;
    }
    curr.next = curr.next.next;
    return head;
}
