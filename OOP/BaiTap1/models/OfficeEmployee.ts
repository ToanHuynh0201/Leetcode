import { Employee } from "./Employee";

export class OfficeEmployee extends Employee {
	constructor(
		name: string,
		dob: Date,
		baseSalary: number,
		private workingDays: number,
		private allowance: number,
	) {
		super(name, dob, baseSalary);
	}

	calculateSalary(): number {
		return this.baseSalary + this.workingDays * 100_000 + this.allowance;
	}
	override getInfo(): string {
		return `${super.getInfo()} - Office - Salary: ${this.calculateSalary()}`;
	}
}
