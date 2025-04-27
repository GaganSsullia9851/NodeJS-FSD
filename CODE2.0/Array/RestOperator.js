function add1(a, b, ...c) {
    console.log(a)  // 1
    console.log(b)  // 2
    console.log(c)  // [3, 4, 5, 6, 7, 7, 8, 9, 10]
    console.log([c]);  //  [[3, 4, 5, 6, 7, 7, 8, 9, 10]]
}
add1(1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10)


function add2(a, b, c) {
    console.log(a)  // 1
    console.log(b)  // 2
    console.log(c)  // 3
}
add2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10)
//console.log(add(1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10));
