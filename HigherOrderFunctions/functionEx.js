var x=1
a(); b()
console.log(x)

function a(){
 var x=10
 console.log(x)   
}

function b(){
    var x=200
    console.log(x)
}

{
    let x=1001010
}

console.log(x)

console.log(x===this.x)

//console.log(window)



var ga=10

function display(){
    var ga=1111
    return ga
}

console.log(display(),ga)


{ga=9}

console.log(ga)


function first(){
    var a=1
    var b=20
    function second(){
        var a=2
        var b=100
        console.log(a,b)
    }
    second()
    console.log(a,b)
}

first()


var f2=1

function f(){
    var a1=200
    return a1
}

console.log(f(),f2)

console.log(f)  // [Funcrion:f]

function today(){
    let t=1
    console.log(t)
    a()
    function a(){
        console.log(t)
    }
}

console.log(m)
let m=5
today()

