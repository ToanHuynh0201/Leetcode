class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
): TreeNode | null {
	if ([root, q, p].includes(null)) return null;

	let curr = root;
	while (curr) {
		if (q!.val < curr.val && p!.val < curr.val) {
			curr = curr.left;
		} else if (q!.val > curr.val && p!.val > curr.val) {
			curr = curr.right;
		} else {
			return curr;
		}
	}

	return null;
}
