class Codec {
	encode(strs: string[]): string {
		let result = "";
		for (const str of strs) {
			result += str.length + "#" + str;
		}

		return result;
	}

	decode(s: string): string[] {
		const result: string[] = [];
		let i = 0;
		while (i < s.length) {
			let j = i;
			while (s[j] !== "#") {
				j++;
			}

			const length = parseInt(s.substring(i, j));

			const start = j + 1;
			const end = start + length;
			result.push(s.substring(start, end));
			i = end;
		}

		return result;
	}
}
