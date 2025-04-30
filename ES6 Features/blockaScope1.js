var varScope=1
let letScope=10
const constScope=100
console.log(varScope,letScope,constScope)
{
    varScope=2
    letScope=11
    console.log(varScope,letScope)
}

console.log(varScope,letScope,constScope)


let a=1
console.log(a)
a=2
console.log(a)

{let b=10
var c=20
const d=30
console.log(b,c,d)
}

console.log(c)


let name9_$=1   // letter
let _a=10      // undescore
let $1=2       // dollar


console.log(name9_$,_a,$1)

let n={}
console.log(typeof(n))


let m=null
let p=m+'1'
console.log(typeof(p))
if(m<10){
    console.log(true)
}

console.log(`===============`,undefined==0)

let z=10+'1'
console.log(z,typeof z)