let arr = [1, 2, 3, 4, 5]

let find = arr.find(ele => ele == 1)

console.log(find);


let arrStr = ["Apple", "Mango", "Jackfruit"]

let findStr = arrStr.find(ele => ele == "Apple")

console.log(findStr);
console.log(arrStr);


const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];


console.log(users.find(ele => ele.id == 1));
