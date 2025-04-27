let arr = []
console.log(arr);  // []
console.log(arr.length);  // 0

// Another example

let arrTest = []
let obj = { name: "Krishna" }
let isBool = true
let isFalse = false

arrTest.push(obj)
arrTest.push(isBool)
arrTest[2] = isFalse

console.log(arrTest)  // [{name: "Krishna"},true,false]
console.log(arrTest[0]);  // {name: "Krishna"}
console.log(arrTest[1]);  // true
console.log(arrTest[2]);  // false

obj.age = 12
console.log(obj);   // { name: 'Krishna', age: 12 }
console.log(arrTest);  // [ { name: 'Krishna', age: 12 }, true, false ]

obj.name = "Ganesh"
console.log(arrTest);  // [ { name: 'Ganesh', age: 12 }, true, false ]



// 2. use Shallow or deep copy to avoid this

let array = []
let obj1 = { name: "Ganesh" }
let obj2 = { name: "Gowri" }

array.push(obj1)
console.log(array)  // [ { name: 'Ganesh' } ]

array.push(structuredClone(obj2))
console.log(array)  // [ { name: 'Ganesh' }, { name: 'Gowri' } ]

obj1.id = 1
obj2.id = 1

console.log(array);  // [ { name: 'Ganesh',id:1}, { name: 'Gowri' } ]
console.log(obj1);  // { name: 'Ganesh',id:1}
console.log(obj2); // { name: 'Gowri',id:1}



// 3. example

let arr2 = []
arr2[99] = 1
console.log(arr2); // [<99 empty items>,1]
console.log(arr2.length); 100
