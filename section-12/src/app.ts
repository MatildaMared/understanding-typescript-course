import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

const products = [
	{ title: "A carpet", price: 29.99 },
	{ title: "A pillow", price: 9.99 },
	{ title: "A blanket", price: 15.99 },
];

const p1 = new Product("A book", 12.99);
console.log(p1.getInformation());

const newProd = new Product("", -12.99);
validate(newProd).then((errors) => {
	if (errors.length > 0) {
		console.log("Validation errors!");
		console.log(errors);
	} else {
		console.log(newProd);
	}
});
console.log(newProd.getInformation());

// const loadedProducts = products.map((product) => {
// 	return new Product(product.title, product.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
	console.log(product.getInformation());
}
