import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";

const products = [
	{ title: "A carpet", price: 29.99 },
	{ title: "A pillow", price: 9.99 },
	{ title: "A blanket", price: 15.99 },
];

const p1 = new Product("A book", 12.99);
console.log(p1.getInformation());

const loadedProducts = plainToClass(Product, products);

// const loadedProducts = products.map((product) => {
// 	return new Product(product.title, product.price);
// });

for (const product of loadedProducts) {
	console.log(product.getInformation());
}
