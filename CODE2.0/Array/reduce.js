let arr = [1, 2, 3, 4, 5, 6, 500, 101]

function reduce(arrValue) {
    return arrValue.reduce((acc, ele) => [acc + ele], 0)
}
console.log(reduce(arr))


function add(a, arr) {
    console.log(arr)  // [ 1, 2, 3, 4, 5, 6, 10000000000000, 101 ] 
    console.log(a) // [ 1, 2, 3, 4, 5, 6, 10000000000000, 101 ]
}

add(arr, arr)

function add1(a, ...arr) {
    console.log(a) // [ 1, 2, 3, 4, 5, 6, 10000000000000, 101 ]
    console.log(arr)  // [ [ 1, 2, 3, 4, 5, 6, 10000000000000, 101 ] ]
    console.log(...arr)  // [ 1, 2, 3, 4, 5, 6, 10000000000000, 101 ]

}

add1(1, arr)