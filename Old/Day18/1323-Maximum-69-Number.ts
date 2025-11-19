// function maximum69Number(num: number): number {
// 	let res = "";
// 	const numToString = num.toString();
// 	console.log(numToString);

// 	let flag = false;
// 	for (let i = 0; i < numToString.length; i++) {
// 		if (numToString[i] === "9") {
// 			res += numToString[i];
// 		} else if (numToString[i] === "6" && !flag) {
// 			res += "9";
// 			flag = true;
// 		} else {
// 			res += numToString[i];
// 		}
// 		console.log(res);
// 	}

// 	return Number(res);
// }

function maximum69Number(num: number): number {
	if (!num.toString().includes("6")) return num;

	const nums = num.toString().split("");

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === "6") {
			nums[i] = "9";
			break;
		}
	}

	return Number(nums.join(""));
}
