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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
	const sameTree = (
		root: TreeNode | null,
		subRoot: TreeNode | null,
	): boolean => {
		if (root === null && subRoot === null) return true;
		if (root === null || subRoot === null) return false;

		return (
			root.val === subRoot.val &&
			sameTree(root.left, subRoot.left) &&
			sameTree(root.right, subRoot.right)
		);
	};

	if (!subRoot) return true;
	if (root) return false;
	if (sameTree(root, subRoot)) return true;
	return isSubtree(root!.left, subRoot) || isSubtree(root!.right, subRoot);
}
