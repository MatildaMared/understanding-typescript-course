const names: Array<string> = ["Matilda", "Markus"]; // Same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("This is done!");
	}, 2000);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const test = merge({ name: "Tilda" }, { age: 30 });
// const test2 = merge({ name: "Tilda" }, 30);
console.log(test.name);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Got no value...";
	if (element.length === 1) {
		descriptionText = "Got " + element.length + " element.";
	} else if (element.length > 1) {
		descriptionText = "Got " + element.length + " elements.";
	}
	return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Hello", "world"]));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Matilda" }, "name"));

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Tilda");
textStorage.addItem("Ballong");
textStorage.addItem("Vincent");
console.log(textStorage.getItems());
textStorage.removeItem("Ballong");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: "Tilda"})
// objStorage.addItem({name: "Vincent"})
// objStorage.addItem({name: "Markus"})

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ["Tilda", "Vincent"];
// names2.push("Markus");
// names2.pop();