export class ListNode<T> {
	value: T;
	next: ListNode<T> | null;

	constructor(value: T, next: ListNode<T> | null = null) {
		this.value = value;
		this.next = next;
	}
}

export class LinkedList<T> {
	head: ListNode<T> | null;
	size: number;

	constructor() {
		this.head = null;
		this.size = 0;
	}

	//Insert first Node
	insertFirst(data: T) {
		this.head = new ListNode<T>(data, this.head);
		this.size += 1;
	}

	//Insert last Node
	insertLast(data: T) {
		let node = new ListNode(data);

		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.size += 1;
	}
	//Insert at index
	insertAt(data: T, index: number) {
		if (index < 0 && index > this.size) {
			return;
		}

		if (index === 0) {
			this.insertFirst(data);
			return;
		}

		const node = new ListNode(data);
		let current: ListNode<T>, prev: ListNode<T>;

		current = this.head!;
		let count = 0;
		while (count < index) {
			prev = current;
			count++;
			current = current.next!;
		}

		node.next = current;
		prev!.next = node;
		this.size;
	}
	//Get at index
	getAt(index: number): T | null {
		let current = this.head;
		let count = 0;
		while (current) {
			if (count === index) {
				return current.value;
			}
			count++;
			current = current.next;
		}
		return null;
	}
	//Remove at index
	removeAt(index: number) {
		if (index < 0 && index > this.size) return;
		let current = this.head;
		let prev: ListNode<T>;
		let count = 0;

		if (index === 0) {
			this.head = this.head!.next;
		} else {
			while (count < index) {
				count++;
				prev = current!;
				current = current!.next;
			}

			prev!.next = current!.next;
		}
		this.size--;
	}
	//Clear List
	clearList() {
		this.head = null;
		this.size = 0;
	}
	//Print list data
	printListData() {
		let current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

const ll = new LinkedList<Number>();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(0);
ll.insertAt(10, 1);
console.log("List data:");
ll.printListData();
ll.removeAt(3);
console.log("List data:");
ll.printListData();
