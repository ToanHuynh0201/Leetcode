export abstract class Employee {
	constructor(
		protected name: string,
		protected dob: Date,
		protected baseSalary: number,
	) {}

	abstract calculateSalary(): number;

	getName(): string {
		return this.name;
	}

	getInfo(): string {
		return `${this.name} - ${this.dob.toDateString()}`;
	}
}
