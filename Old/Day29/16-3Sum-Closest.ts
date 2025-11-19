function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let closest = Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const tempSum = nums[i] + nums[j] + nums[k];
            const tempClosest = Math.abs(tempSum - target);

            if (tempClosest < closest) {
                sum = tempSum;
                closest = tempClosest;
            }

            if (tempSum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return sum;
}
