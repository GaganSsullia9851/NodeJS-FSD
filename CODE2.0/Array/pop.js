// Removes the last element from array and returns it

let arr = [1, 2, 3, 4, 5]

console.log(arr.pop())  // 5
console.log(arr); // [1, 2, 3, 4]


let popedValue = arr.pop()
console.log(popedValue) // 4
console.log(arr) //  [1,2,3]

function pop(arr) {
    return arr

}
console.log("Pop function", pop(arr))  // [1,2,3]

// 2 example

let arr1 = [10, 20, 30, 40, 50]

console.log(arr1.pop(10))  //50, POP operation is removing last element from array
console.log(arr1.pop(2)) // 40
console.log(arr1);  // [10,20,30]

// 3. Example

const arr3 = [10, 20, 30, 40, 50]
console.log(arr3.pop());  // 50


let v = arr3.pop()  // 40
console.log(v)  //40

console.log(arr3) // [10,20,30]

