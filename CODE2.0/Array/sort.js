let arr = [1, 2, 3, 10, 1000, 1, 0, 0.1]

let sortedArr = arr.sort((a, b) => a - b)
console.log(sortedArr);
console.log(arr);

let arrStr = ["zibra", "Pigeon", "TOM", "Cat"]
arrStr.sort()
console.log(arrStr);




let a = [1, 2, 3]
let b = [1, 2, 3]

console.log(a == b);  // false
console.log(a === b); // false

console.log(a[0] == b[0]);  // true
console.log(a[0] === b[0]); // true


let c = a
console.log(a == c); // true
console.log(a === c); // true

let m = 1
let n = 1
console.log(m == n);  // true
console.log(m === n);  // true

let e = 1
let f = "1"
console.log(e == f);  //true
console.log(e === f);  // false
