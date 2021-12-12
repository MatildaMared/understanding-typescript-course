const userName = "Tilda";
// userName = "Vincent";

let age = 30;
age = 31;

function add(a: number = 2, b: number = 3) {
	var result;
	result = a + b;
	return result;
}

console.log(add());

const hobbies = ["Cooking", "Sports"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
	name: "Tilda",
	age: 31,
};

const copiedPerson = { ...person };
copiedPerson.name = "Vincent";

console.log(person);
console.log(copiedPerson);

const addMany = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue;
	}, 0);
};

console.log(addMany(1, 3, 7, 9, 2));

const cat = {
	name: "Vincent",
	breed: "Persian/Ragdoll",
};

const { name: catName, breed } = cat;
console.log(catName, breed);
