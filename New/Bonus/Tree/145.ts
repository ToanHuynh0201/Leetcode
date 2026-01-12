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

// function postorderTraversal(root: TreeNode | null): number[] {
// 	const result: number[] = [];

// 	function dfs(node: TreeNode | null) {
// 		if (!node) return;

// 		dfs(node.left); // Left
// 		dfs(node.right); // Right
// 		result.push(node.val); // Root
// 	}

// 	dfs(root);
// 	return result;
// }

function postorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];

	const result: number[] = [];
	const stack: TreeNode[] = [root];

	while (stack.length) {
		const node = stack.pop()!;
		result.unshift(node.val);

		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
	}

	return result;
}
