class MyHashSet {
	private head: HashNode<number> | null;
	constructor() {
		this.head = null;
	}

	add(key: number): void {
		const node: HashNode<typeof key> = { value: key };

		if (!this.head) {
			this.head = node;
			return;
		}

		if (this.contains(key)) return;

		node.next = this.head;
		this.head = node;
	}

	remove(key: number): void {
		if (!this.head) return;
		if (this.head.value === key) {
			this.head = this.head.next ?? null;
			return;
		}

		let curr = this.head;

		while (curr.next) {
			if (curr.next.value === key) {
				curr.next = curr.next.next;
				break;
			}

			curr = curr.next;
		}
	}

	contains(key: number): boolean {
		let curr = this.head;
		while (curr) {
			if (curr.value === key) {
				return true;
			}
			curr = curr.next!;
		}

		return false;
	}
}

type HashNode<T> = {
	value: T;
	next?: HashNode<T>;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
