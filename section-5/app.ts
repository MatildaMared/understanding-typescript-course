class Department {
	// private name: string;
	private employees: string[] = [];

	constructor(private readonly id: string, private name: string) {
		// this.id = id;
		// this.name = name;
	}

	describe(this: Department) {
		console.log("Department: " + this.name);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	admins: string[];

	constructor(id: string, admins: string[]) {
		super(id, "IT");
		this.admins = admins;
	}
}

class AccountingDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
	}

	addReport(report: string) {
		this.reports.push(report);
	}
}

const it = new ITDepartment("d2", ["Tilda"]);
console.log(it);

const accounting = new AccountingDepartment("d1", []);

accounting.addReport("The first report...");
console.log(accounting);
accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

// accounting.employees[2] = "Matilda";

accounting.addEmployee("Vincent");
accounting.addEmployee("Markus");
accounting.printEmployeeInformation();
