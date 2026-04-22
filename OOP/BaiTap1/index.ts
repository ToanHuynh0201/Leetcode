import { Company } from "./models/Company";
import { OfficeEmployee } from "./models/OfficeEmployee";
import { ProductionEmployee } from "./models/ProductionEmployee";
import { Manager } from "./models/Manager";

const company = new Company();

company.addEmployee(
	new OfficeEmployee("Toan", new Date("2001-01-01"), 5000000, 22, 1000000),
);

company.addEmployee(
	new ProductionEmployee("An", new Date("2000-05-10"), 4000000, 300),
);

company.addEmployee(
	new Manager("Binh", new Date("1995-03-20"), 8000000, 2, 5000000),
);

company.displayAll();

console.log("Total salary:", company.totalSalary());

console.log("Search:", company.findByName("Toan"));
