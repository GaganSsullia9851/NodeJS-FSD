// 1. Push

let arr = [1, 2, 3, 5, 6, 100, 1, 0, 10]

let a = arr.push(500, 10101)
console.log(a)  // 11
console.log(arr) //  [1, 2, 3, 5, 6, 100, 1, 0, 10,500,10101]

arr.push(15)
console.log(arr); // [1, 2, 3, 5, 6, 100, 1, 0, 10,500,10101,15]



// 2. POP

let value = arr.pop()
console.log(value);   // 10101
console.log(arr);[1, 2, 3, 5, 6, 100, 1, 0, 10, 500]

// 3. unshift

let unshiftArray = [10, 20, 30, 40, 50]
unshiftArray.unshift(500, 100, 301, 200)
console.log(unshiftArray);  // [500, 100, 301, 200,10,  20,  30,  40,50]

// 4. shift
unshiftArray.shift()
let value1 = unshiftArray.shift()

console.log(value1) // 100

console.log(unshiftArray) // [301, 200,10,  20,  30,  40,50]
