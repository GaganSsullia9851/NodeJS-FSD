// Adds one or more elements to the end of an array and modify the original array

//1.Array of Numbers

let arrNum = [1, 2, 3, 50, 100]

let value = arrNum.push(101, 102, 103)
console.log(value); //8

console.log(arrNum); // [1,2,3,50,100,101,102,103]

console.log(arrNum.push());  // 8

let value1 = arrNum.push()
console.log(value1);   //9




// 2. Array of strings

let arrStr = ['A', 'B', "Krsihna", "Elephant", "lion", "Tiger", "Dog"]

arrStr.push("COW")
console.log(arrStr) // ['A','B','Krsihna','Elephant','lion','Tiger','Dog','COW']

let c = arrStr.push("Cat")
console.log(c);   //9

console.log(arrStr);  // ['A','B','Krsihna','Elephant','lion','Tiger','Dog','COW','Cat']

//3 .Array of object

let arrObject = [{ id: 1, name: "Raj" }, { id: 2, name: "Raja" }, { id: 3, name: "Ravi" }]

arrObject.push(100, 101, { id: 4, name: "Rajesh" })

console.log(arrObject) // [{ id: 1, name: "Raj" }, { id: 2, name: "Raja" }, { id: 3, name: "Ravi" },100,101,{ id: 4, name: "Rajesh" }]


let arr1 = [1, 2, 3, 10, 11]
console.log(arr1);  // [1, 2, 3, 10, 11]
console.log(arr1.push(51, 52)); // 7

