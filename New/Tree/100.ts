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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (q === null && p === null) return true;
	if (p === null || q === null) return false;

	return (
		q.val === p.val &&
		isSameTree(q.left, p.left) &&
		isSameTree(q.right, p.right)
	);
}
