class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// function removeNodes(head: ListNode | null): ListNode | null {
// 	const stack: ListNode[] = [];

// 	let curr = head;
// 	while (curr) {
// 		while (stack.length > 0 && stack[stack.length - 1].val < curr.val)
// 			stack.pop();

// 		stack.push(curr);
// 		curr = curr.next;
// 	}

// 	for (let i = 0; i < stack.length - 1; i++) stack[i].next = stack[i + 1];

// 	if (stack.length) {
// 		stack[stack.length - 1].next = null;
// 		return stack[0];
// 	} else return null;
// }
function removeNodes(head: ListNode | null): ListNode | null {
	if (!head!.next) return head;
	head!.next = removeNodes(head!.next);
	return head!.next!.val > head!.val ? head!.next : head;
}
