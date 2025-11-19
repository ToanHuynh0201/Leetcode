function buildArray(nums: number[]): number[] {
    const n = nums.length;
    const ans = [];

    for (let i = 0; i < n; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
}
