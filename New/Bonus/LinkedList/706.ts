type HashNode<T = number> = {
	key: T;
	value: T;
	next?: HashNode<T>;
};

class MyHashMap {
	private head?: HashNode;

	constructor() {
		this.head = undefined;
	}

	put(key: number, value: number): void {
		const node: HashNode = { key, value };
		if (!this.head) {
			this.head = node;
			return;
		}
		this.remove(key);
		node.next = this.head;
		this.head = node;
	}

	get(key: number): number {
		let curr = this.head;
		while (curr) {
			if (curr.key === key) {
				return curr.value;
			}
			curr = curr.next;
		}
		return -1;
	}

	remove(key: number): void {
		if (!this.head) {
			return;
		}
		if (this.head.key === key) {
			this.head = this.head.next;
			return;
		}
		let curr = this.head;
		while (curr.next) {
			if (curr.next.key === key) {
				curr.next = curr.next.next;
				return;
			}
			curr = curr.next;
		}
	}
}
