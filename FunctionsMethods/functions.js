// 1. Function Declaration
function add1(a, b) {
    return a + b;
}
console.log("Function Declaration:", add1(2, 3));

// 2. Function Expression
const add2 = function (a, b) {
    return a + b;
};
console.log("Function Expression:", add2(4, 5));

// 3. Arrow Function (concise return)
const add3 = (a, b) => a + b;
console.log("Arrow Function (concise):", add3(6, 7));

// 4. Arrow Function (block body)
const add4 = (a, b) => {
    return a + b;
};
console.log("Arrow Function (block):", add4(8, 9));

// 5. Anonymous Function (as callback)
setTimeout(function () {
    console.log("Anonymous Function: Hello after 1 second");
}, 1000);

// 6. IIFE (Immediately Invoked Function Expression)
(function (a, b) {
    console.log("IIFE Result:", a + b);
})(10, 11);

// 7. Function Constructor (not recommended)
const add5 = new Function('a', 'b', 'return a + b');
console.log("Function Constructor:", add5(12, 13));

// 8. Method in Object
const calculator = {
    add6(a, b) {
        return a + b;
    }
};
console.log("Object Method:", calculator.add6(14, 15));

// 9. Class Method
class MathOps {
    add7(a, b) {
        return a + b;
    }
}
const math = new MathOps();
console.log("Class Method:", math.add7(16, 17));
