let arr = [1, 2, 3, 4, 5]

let NormalMethod = arr.map(function (value) {
    return value * 2
})
console.log(NormalMethod);


let arrowMethod = arr.map(value => value * 2)
console.log(arrowMethod);

function doubleValue(arr) {
    return console.log("Function value ", arr.map(value => value * 2))
}

doubleValue(arr)


function doubleValue1(arr) {
    return arr.map(value => value * 2)
}

console.log(doubleValue1(arr))


let arrNumber = [1, 2, 3, 100, 500, 199, 500]
let arrString = ["Apple", "Orange", "Grape"]
let arrObject = [{ id: 1, name: "Raj" }, { id: 2, name: "Ganesh" }, { id: 3, name: "Rama" }]


let transform = arrNumber.map(value => value * 2).map(ele => ele / 2)
console.log(transform);

let arrStringtransform = arrString.map(value => value.endsWith('e'))  // [ true, true, true ]
console.log(arrStringtransform);

let arrStringtransform1 = arrString.filter(value => value.endsWith('e'))  // [ 'Apple', 'Orange', 'Grape' ]
console.log(arrStringtransform1);

let arrStringtransform2 = arrString.map(value => value.indexOf('a'))  // [ -1, 2, 2 ]
console.log(arrStringtransform2);

let arrStringtransform3 = arrString.filter(value => value.indexOf('1'))  //
console.log(arrStringtransform3);

let arrStringtransform4 = arrObject.map(value => value.id * 2)  // [2,4,6]
console.log(arrStringtransform4);


let arrStringtransform5 = arrObject.map(value => value.name.length > 5)  // [ false, true, false ]
console.log(arrStringtransform5);


let arrStringtransform6 = arrObject.map(value => value.name.length)  // [ 3, 6, 4 ]
console.log(arrStringtransform6);

let arrStringtransform7 = arrObject.map(function () {

})
console.log(arrStringtransform7);  // [ undefined, undefined, undefined ]

let arrStringtransform8 = arrObject.map(function () {
    return 10
})
console.log(arrStringtransform8);  // [ 10, 10, 10 ]


let arrStringtransform9 = arrNumber.map(function (ele) {
    let sqare = ele * ele
    return sqare
})
console.log(arrStringtransform9);  // [1, 4,9, 10000,250000, 39601,250000]

let arrStringtransform10 = arrNumber.map(ele => ele * ele)
console.log(arrStringtransform10);  // [1, 4,9, 10000,250000, 39601,250000]

let arrObjectNew = [{ id: 1, name: "Raj" }, { id: 2, name: "Ganesh" }, { id: 3, name: "Rama" }]


let newObject = arrObjectNew.map((ele) => {
    return {
        num: ele.id,
        GodName: ele.name
    }
})

console.log(newObject) // [{ num: 1, GodName: 'Raj' },{ num: 2, GodName: 'Ganesh' },{ num: 3, GodName: 'Rama' }]