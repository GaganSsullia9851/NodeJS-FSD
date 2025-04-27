
console.log(a)   // undefined
//console.log(z) // ReferenceError : z is not defined
console.log(add())
var a=1
let b
const c=1
var a=2
console.log(c)

console.log('var a value=>',a)


function add(){
    return 2
}

console.log(add())
console.log(add)  // [Function:add]

