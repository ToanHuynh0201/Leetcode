function checkInclusion(s1, s2) {
	let tempArr = [];
	s1 = s1.split("").sort().join("");
	for (let i = 0; i < s2.length; i++) {
		tempArr.push(s2[i]);
		if (tempArr.length > s1.length) tempArr.shift();
		let tempString = [...tempArr].sort().join("");
		console.log(tempString);

		if (s1 === tempString) return true;
	}
	return false;
}

checkInclusion("ab", "eidbaooo");
