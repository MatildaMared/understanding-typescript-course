function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: ", num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(7, 5));
printResult(add(5, 13));
addAndHandle(5, 3, function (num) { return console.log("hello", num); });
