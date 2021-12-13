"use strict";
const names = ["Matilda", "Markus"]; // Same as string[]
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const test = merge({ name: "Tilda" }, { age: 30 });
// const test2 = merge({ name: "Tilda" }, 30);
console.log(test.name);
function countAndDescribe(element) {
    let descriptionText = "Got no value...";
    if (element.length === 1) {
        descriptionText = "Got " + element.length + " element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Hello", "world"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Matilda" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Tilda");
textStorage.addItem("Ballong");
textStorage.addItem("Vincent");
console.log(textStorage.getItems());
textStorage.removeItem("Ballong");
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names2 = ["Tilda", "Vincent"];
// names2.push("Markus");
// names2.pop();
