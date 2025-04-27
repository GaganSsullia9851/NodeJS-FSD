// let arr = [1, 2, 4, 33, 3, 3, 3, 99, 0]

// arr.filter(function (value) {
//     return console.log(value > 98)
// })


// console.log(arr.filter(function (value) {
//     return value > 98
// }))


// let filter = arr.filter(function (value) {
//     return value > 98
// })node A
// console.log(filter);



// function filterMethod(arr) {
//     console.log(arr)
//     return arr.filter(value => value > 90)
// }

// console.log(filterMethod(arr))

//======== Advanced Method===========

let arrNumber = [1, 2, 3, 100, 500, 199, 500]
let arrString = ["Apple", "Orange", "Grape"]
let arrObject = [{ id: 1, name: "Raj" }, { id: 2, name: "Ganesh" }, { id: 3, name: "Rama" }]

// Anonymous function
let arrNumberEven = arrNumber.filter(function (val) {
    return val > 100;
})
console.log(arrNumberEven)


// Using Arrow function
let arrNumberEven1 = arrNumber.filter(val => val > 2)
console.log(arrNumberEven1)


// arrObject

let arrObjectresult = arrObject.filter(value => value.id > 1)
console.log(arrObjectresult);

// Printing value, index, array
let arrObjectresult1 = arrObject.filter((value, index, array) => {
    console.log(value, index, array)
})
console.log(arrObjectresult1);


// Array string 

let arrStringresult = arrString.map(value => value.toUpperCase()).filter(value => value.length > 4)
console.log(arrStringresult);

//nested filter
let arrObjectresult2 = arrObject.filter(value => value.id !== 1 && value.id !== 2).filter(val => val.name == "Rama")
console.log(arrObjectresult2);