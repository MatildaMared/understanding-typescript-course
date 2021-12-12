"use strict";
var _a;
const e1 = {
    name: "Tilda",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(e1);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("Matilda", "Vincent").split(""));
console.log(add("3", "7"));
console.log(add(3, 7));
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
// 	console.log("Name: ", emp.name);
// 	if ("privileges" in emp) {
// 		console.log("Privileges: ", emp.privileges);
// 	}
// 	if ("startDate" in emp) {
// 		console.log("Start Date: ", emp.startDate);
// 	}
// }
// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Vincent", startDate: new Date() });
// class Car {
// 	drive() {
// 		console.log("Driving...");
// 	}
// }
// class Truck {
// 	drive() {
// 		console.log("Driving a truck...");
// 	}
// 	loadCargo() {
// 		console.log("Loading cargo...");
// 	}
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
// 	vehicle.drive();
// 	if ("loadCargo" in vehicle) {
// 		vehicle.loadCargo();
// 	}
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
// 	type: "bird";
// 	flyingSpeed: number;
// }
// interface Horse {
// 	type: "horse";
// 	runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
// 	let speed;
// 	switch (animal.type) {
// 		case "bird":
// 			speed = animal.flyingSpeed;
// 			break;
// 		case "horse":
// 			speed = animal.runningSpeed;
// 	}
// 	console.log("Moving at speed: ", speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 15 });
// // const paragraph = <HTMLParagraphElement>document.getElementById("paragraph");
// const paragraph = document.getElementById("paragraph") as HTMLParagraphElement;
// paragraph.innerHTML = "Hej 👋🏻";
// // const userInputElement = <HTMLInputElement>document.getElementById("input");
// const userInputElement = document.getElementById("input") as HTMLInputElement;
// userInputElement.value = "Hello!!";
// interface ErrorContainer {
// 	[key: string]: string;
// }
// const errorBag: ErrorContainer = {
// 	email: "Not a valid email",
// 	username: "Username already taken",
// };
