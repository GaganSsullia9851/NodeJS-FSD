// 1. callbacks  basic callback

function greet(name, msg) {
    console.log(`Hello ${name}`)
    return msg()
}

greet('Rama', () => {
    console.log('Good Morning')
})


//===================

// function add(a, b, res) {
//     console.log(res(a, b))
// }


// function sum(a, b) {
//     return a + b
// }
// add(1, 2, sum)


function add(a, b, res) {
    console.log(res(a, b))
}


// function sum(a, b) {
//     return a + b
// }
add(1, 2, () => {
    return 1 + 2
})