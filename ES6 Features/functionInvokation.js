var x=1
add1(), add2()

function add1(){
    var x=10
    console.log(x)
}

function add2(){
    var x=20
    console.log(x)
}

console.log(x)

console.log(window.x===this.x===x)