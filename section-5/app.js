"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(report) {
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
