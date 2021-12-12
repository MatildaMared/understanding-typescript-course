"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase, this.name);
    }
}
let user1;
user1 = new Person("Matilda", 31);
user1.greet("Hiii");
console.log(user1);
