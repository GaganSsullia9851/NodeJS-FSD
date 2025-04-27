const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

console.log("1", users.filter(ele => ele.id == 2))  // { id: 2, name: "Bob" }


console.log("2", users);

/** 
[
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
*/


