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

// function inorderTraversal(root: TreeNode | null): number[] {
// 	const result: number[] = [];

// 	function dfs(node: TreeNode | null) {
// 		if (!node) return;

// 		dfs(node.left); // Left
// 		result.push(node.val); // Root
// 		dfs(node.right); // Right
// 	}

// 	dfs(root);
// 	return result;
// }

function inorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];
	const stack: TreeNode[] = [];
	let curr: TreeNode | null = root;

	while (curr || stack.length) {
		while (curr) {
			stack.push(curr);
			curr = curr.left;
		}

		curr = stack.pop()!;
		result.push(curr.val);
		curr = curr.right;
	}

	return result;
}
