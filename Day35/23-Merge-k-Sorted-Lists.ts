// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let nodesArray: Array<ListNode | null> = [];
    lists.forEach((node) => {
        while (node) {
            nodesArray.push(node);
            node = node.next;
        }
    });

    nodesArray.sort((node1, node2) => node1.val - node2.val);

    let resultNode = nodesArray[0] ?? null;

    nodesArray.forEach((node, index, arr) => {
        node.next = arr[index + 1] ?? null;
    });

    return resultNode;
}
