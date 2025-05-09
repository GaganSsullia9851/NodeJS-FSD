// 1.st method

function outerFunction() {
    let name = "JavaScript"
    console.log("outer function call");


    function inner() {
        console.log(name);
    }
    inner()

}

outerFunction()

/**
 * outer function call
 * JavaScript
 */


function outer2Method() {
    console.log("Using return method");
    let name = "Java"

    return function inner() {
        console.log(name);
    }
}

let display = outer2Method()
display()

/**
Using return method
Java
 */