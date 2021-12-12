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
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("This is the IT department with id: ", this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No report found");
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass a valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log("Accounting department – ID: ", this.id);
    }
}
const employee1 = Department.createEmployee("Sara");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d2", ["Tilda"]);
console.log(it);
it.describe();
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee("Max");
accounting.addEmployee("Anna");
// console.log(accounting.mostRecentReport);
accounting.addReport("The first report...");
accounting.addReport("The second report...");
accounting.mostRecentReport = "Another report!";
console.log(accounting.mostRecentReport);
console.log(accounting);
accounting.describe();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
// accounting.employees[2] = "Matilda";
accounting.addEmployee("Vincent");
accounting.addEmployee("Markus");
accounting.printEmployeeInformation();
