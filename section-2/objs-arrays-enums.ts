// const person: {
// 	name: string;
// 	age: number;
// } = {
// const person = {
// 	name: "Matilda",
// 	age: 31,
// 	hobbies: ["Coding", "Movies"],
// 	role: [2, "author"],
// };

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: "Matilda",
	age: 31,
	hobbies: ["Coding", "Movies"],
	role: Role.ADMIN,
};

for (const hobby of person.hobbies) {
	console.log(hobby);
}
