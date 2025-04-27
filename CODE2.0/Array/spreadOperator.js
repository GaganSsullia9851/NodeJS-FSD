let arrNumber = [1, 23, 43, 5, 90]
let arrStr = ["India", "USA", "France", "Nagaland"]
let arrObject = [{ id: 1, name: "Raj" }, { id: 2, name: "Rajesh" }]


let arrNumberCopy = [...arrNumber]
console.log(arrNumberCopy);

console.log(arrNumberCopy == arrNumber); //false
console.log(arrNumberCopy === arrNumber);  // false
