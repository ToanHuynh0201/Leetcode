class NumArray {
	private prefix: number[];
	constructor(nums: number[]) {
		this.prefix = new Array(nums.length + 1).fill(0);
		for (let i = 0; i < nums.length; i++) {
			this.prefix[i + 1] = nums[i] + this.prefix[i];
		}
	}

	sumRange(left: number, right: number): number {
		return this.prefix[right + 1] - this.prefix[left    ];
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
