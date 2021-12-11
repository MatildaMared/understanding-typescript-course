function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number) {
	console.log("Result: ", num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(7, 5));

printResult(add(5, 13));

addAndHandle(5, 3, (num) => console.log("hello", num));
