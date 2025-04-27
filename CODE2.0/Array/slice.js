let arrNumber = [1, 2, 10, 21, 25, 100, 501]
let arrStr = [1, 2, 10, 21, 25, 100, 501]
let arrobj = [{ id: 1, name: "Raj" }, { id: 2, name: 'Pavan' }]

let slice = arrNumber.slice(1, 2)

console.log(arrNumber); // [1, 2, 10, 21, 25, 100, 501]


console.log("very imp", arrNumber.slice()) // [1, 2, 10, 21, 25, 100, 501]
console.log("imp", arrNumber.slice(0)) // [1, 2, 10, 21, 25, 100, 501]
console.log(arrNumber.slice(0, 1)) // [1]
console.log(arrNumber.slice(0, 2)) // [1, 2]
console.log(arrNumber.slice(2, 3)) // [10]
console.log(arrNumber.slice(-1, -3)) // []
console.log(arrNumber.slice(-3, -1)) // [25, 100]
