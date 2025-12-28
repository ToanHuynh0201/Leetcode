function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const findLength = () => {
		if (!head) return 0;

		let count = 0;
		let curr: ListNode | null = head;
		while (curr) {
			count++;
			curr = curr.next;
		}

		return count;
	};

	const length = findLength();

	let i = 0;
	let traverseTill = length - n - 1;

	if (traverseTill === -1) return head!.next;

	let curr = head;
	while (i < traverseTill) {
		curr = curr!.next;
		i++;
	}

	curr!.next = curr!.next!.next;

	return head;
}
