{

    let a=5
    const b=2
    var c=1
}

console.log(c)  //1
//console.log(a)  // ReferenceError: a is not defined
//console.log(b) // ReferenceError: b is not defined

var res=100

function dispaly(){
let res=10
console.log('inside the function',res)
}
dispaly()

{
    var res=99
}

console.log('outside the function',res)

//dispaly()