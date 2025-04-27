// 1. Object (array and Object) are referenceType in JS

let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]

arr1[10] = 100

console.log(arr1);  //[ 1, 2, 3, 4, 5, <5 empty items>, 100 ]
console.log(arr2); //[ 1, 2, 3, 4, 5, <5 empty items>, 100 ]

console.log(arr1 == arr2);  // true
console.log(arr1 === arr2);  // true

//2. Using shallow copy

console.log("=======Shallow copy starts here======")
let originalArray = [10, 20, 30]
let copyArray = [...originalArray]

console.log(originalArray);  // [10,20,30]
console.log(copyArray);  // [10,20,30]

console.log(originalArray == copyArray);  // false
console.log(originalArray === copyArray);  // false

originalArray[10] = 15
copyArray[10] = 21

console.log(originalArray);  // [ 10, 20, 30, <7 empty items>, 15 ]
console.log(copyArray);  // [ 10, 20, 30, <7 empty items>, 21]


let nestedarrA = [[1], [2, 3], [4, 5], [100]]
let nestedarrB = [...nestedarrA]

nestedarrA[0][1] = 101
console.log(nestedarrA);  // [ [ 1, 101 ], [ 2, 3 ], [ 4, 5 ], [ 100 ] ]
console.log(nestedarrB);  // [ [ 1, 101 ], [ 2, 3 ], [ 4, 5 ], [ 100 ] ]

console.log(nestedarrA[0][0] == nestedarrB[0][0])  // true


console.log("=======Shallow copy ends here======")

// 3. Deep Copy (Structured clone)

let oriArray = [1, 2, 3, 4, 5]
let copArray = structuredClone(oriArray)

console.log(oriArray); //[1, 2, 3, 4, 5]
console.log(copArray); //[1, 2, 3, 4, 5]

console.log(oriArray == copArray) // false
console.log(oriArray === copArray)  // false

oriArray[5] = 101
copArray[5] = 102

console.log(oriArray);  // [1, 2, 3, 4, 5,101]
console.log(copArray);  // [1, 2, 3, 4, 5,102]

