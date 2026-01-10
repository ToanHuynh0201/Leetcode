function minOperations(nums, k) {
	return nums.reduce((total, curr, currI) => {
		console.log(`${currI} : ${total}`);

		if (curr < k) total++;
		return total;
	});
}

minOperations([2, 11, 10, 1, 3], 10);
