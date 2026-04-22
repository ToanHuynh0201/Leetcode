import { Employee } from "./Employee";

export class ProductionEmployee extends Employee {
	constructor(
		name: string,
		birthDate: Date,
		baseSalary: number,
		private products: number,
	) {
		super(name, birthDate, baseSalary);
	}

	calculateSalary(): number {
		return this.baseSalary + this.products * 2000;
	}

	override getInfo(): string {
		return `${super.getInfo()} - Production - Salary: ${this.calculateSalary()}`;
	}
}
