class TimeMap {
	private map;
	constructor() {
		this.map = new Map<string, Array<VT>>();
	}

	set(key: string, value: string, timestamp: number): void {
		const vt = this.map.get(key) || [];
		vt.push({ value, timestamp });
		this.map.set(key, vt);
	}

	get(key: string, timestamp: number): string {
		const vt = this.map.get(key) || [];
		return this.search(timestamp, vt);
	}

	search(timestamp: number, vt: Array<VT>): string {
		let left = 0,
			right = vt.length - 1;
		let ans = "";
		while (left <= right) {
			const mid = left + Math.floor((right - left) / 2);
			const { value, timestamp: tempTimestamp } = vt[mid];
			if (tempTimestamp <= timestamp) {
				ans = value;
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}

		return ans;
	}
}

type VT = {
	value: string;
	timestamp: number;
};
