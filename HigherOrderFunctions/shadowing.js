var a=100
console.log(a)  // 100
let m=500

{
    var a=1
    let b=10
    const c=20
    console.log(a)   // 1
}
console.log(a) // 1   because  a is in global scope

console.log(m)  // 500

var z=1

{let z=2}

console.log('z value is',z)