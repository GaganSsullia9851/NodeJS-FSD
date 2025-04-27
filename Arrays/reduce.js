let arr = [5, 21]

let count = arr.reduce((acc, ele, index, arr) => {
    console.log(acc, ele, index, arr);
}, 10)

// 10 5 0 [5,21]
// undefined 21 1 [5,21]


let arr1 = [5, 21, 100, 1010, 100, 51]

let count1 = arr1.reduce((acc, ele, index, arr) => {
    return acc + ele
}, 0)

console.log(count1);



