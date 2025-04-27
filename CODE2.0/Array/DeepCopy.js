// 1. Using JSON.parse(JSON.stringify)

let arrA = [1, 2, 3, 4, 5, [10, 20, 30, [11, 21, 31]]]
console.log(typeof (arrA))  // object 

let arrB = JSON.stringify(arrA)
console.log(typeof (arrB))  // string

let arrC = JSON.parse(arrB)
console.log(typeof (arrC))  // Object



let arrD = JSON.parse(JSON.stringify(arrA))

arrD[0] = 1.1
arrD[5][0] = 11
arrA[0] = 500
arrA[5][0] = 5100

console.log(arrA); // [ 500, 2, 3, 4, 5, [ 5100, 20, 30, [ 11, 21, 31 ] ] ]
console.log(arrD); // [ 1.1, 2, 3, 4, 5, [ 11, 20, 30, [ 11, 21, 31 ] ] ]


// 2.using structuredClone

let objA = { name: "Raj", age: 100, package: { salary: '1B' } }
let objB = structuredClone(objA)

console.log(objA); // { name: 'Raj', age: 100, package: { salary: '1B' } }
console.log(objB); // { name: 'Raj', age: 100, package: { salary: '1B' } }

objA["name"] = "Rama"
objA["package"]["salary"] = "10B"

objB["name"] = "Krishna"
objB["package"]["salary"] = "2.1B"


console.log(objA); // { name: 'Rama', age: 100, package: { salary: '10B' } }
console.log(objB); // { name: 'Krishna', age: 100, package: { salary: '2.1B' } }

