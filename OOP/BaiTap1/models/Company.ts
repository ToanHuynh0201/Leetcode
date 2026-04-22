import { Employee } from "./Employee";

export class Company {
	private employees: Employee[] = [];

	addEmployee(emp: Employee): void {
		this.employees.push(emp);
	}

	displayAll(): void {
		this.employees.forEach((e) => console.log(e.getInfo()));
	}

	totalSalary(): number {
		return this.employees.reduce((sum, e) => sum + e.calculateSalary(), 0);
	}

	findByName(name: string): Employee[] {
		return this.employees.filter((e) =>
			e.getName().toLowerCase().includes(name.toLowerCase()),
		);
	}
}
