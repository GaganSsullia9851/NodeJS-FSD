const arrNum = [10, 3, 4, 5, 6, 6, 7, 78, 9]

arrNum.splice(1, 0, 11, 100)
console.log(arrNum);  // [10, 11,100,3, 4, 5, 6, 6, 7, 78, 9]

let value = arrNum.splice(0, 1, 11)
console.log(value);  // [10]
console.log(arrNum)  // [11,100,3, 4, 5, 6, 6, 7, 78, 9]

let value2 = arrNum.splice(0, 0, 99, 98)
console.log(value2);   // []
console.log(arrNum);   // [99, 98,11,100,3, 4, 5, 6, 6, 7, 78, 9]



const arrStr = ["Apple", "Mongo", "Orange", "Pineapple"]
arrStr.splice(2, 0, "Watermelon")
console.log(arrStr)  // ["Apple", "Mongo", "Watermelon","Orange", "Pineapple"]


// To make array empty method

let smallArray = [1, 2, 3, 4, 5]
smallArray.splice(0, smallArray.length)
console.log(smallArray);  // []
console.log(smallArray.length);  // 0


let smallArray1 = [1, 2, 3, 4, 5]
let s = smallArray1.splice(0, smallArray1.length)
console.log(s);  // [1, 2, 3, 4, 5]
console.log(smallArray1.length);  // 0
console.log(smallArray1);  // []