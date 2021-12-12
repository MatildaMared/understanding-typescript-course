type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
};

interface Named {
	readonly name: string;
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name: string;
	age: number;

	constructor(n: string, age: number) {
		this.name = n;
		this.age = age;
	}

	greet(phrase: string) {
		console.log(phrase, this.name);
	}
}

let user1: Greetable;

user1 = new Person("Matilda", 31);

user1.greet("Hiii");
console.log(user1);
