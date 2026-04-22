import { Employee } from "./Employee";

export class Manager extends Employee {
	constructor(
		name: string,
		birthDate: Date,
		baseSalary: number,
		private coefficient: number,
		private bonus: number,
	) {
		super(name, birthDate, baseSalary);
	}

	calculateSalary(): number {
		return this.baseSalary * this.coefficient + this.bonus;
	}

	override getInfo(): string {
		return `${super.getInfo()} - Manager - Salary: ${this.calculateSalary()}`;
	}
}
