display('hoisting')  // 100

console.log(a)  // undefined

var a=10
console.log(a) // 10

function display(disp){
return console.log(disp)
}

display("before")


var add=()=>{
    console.log('add value is now undefined in the memory creation phasr and ones it start runs the the function is added to it  ')
}
