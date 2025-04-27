//1. Normal callback

const { log } = require("util")

function cart(id, name, display) {
    console.log(id, name)
    display(id, name)

}
cart(1, "smartPhone", (...data) => {
    console.log(data)
})


//2. Async callback using setTimeout

setTimeout(() => {
    console.log("Hai");
}, 100)

function acallback() {
    setTimeout(() => {
        console.log("Hello");
    }, 100)
}

acallback()


// 3. Using Array Map

let arr = [1, 2, 3, 4, 5]

function arrCallback(arr) {
    let n = arr.map(value => value * 2)
    console.log(n)
}
console.log(arr)
arrCallback(arr)


// function a() {
//     b()
//     console.log("a")
//     function b() {
//         console.log("b")
//     }
// }
// a()

// 4.

function calculate(a, b, operation) {
    return operation(a, b)
}

let sum = (a, b) => a + b
let multiply = (a, b) => a * b
let divide = (a, b) => a / b
let minus = (a, b) => a - b

console.log(calculate(1, 2, sum))
console.log(calculate(1, 2, multiply))
console.log(calculate(1, 2, divide))
console.log(calculate(1, 2, minus))

calculate(1, 2, function (a, b) {
    console.log(a + b)
})

calculate(10, 20, (a, b) => console.log(a + b))

//5. 

function display(callback) {
    callback('Good Morning')
}

display(data => {
    console.log(data);
})