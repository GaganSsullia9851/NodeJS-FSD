let userArray = [{ id: 1, name: "Krishna" }, { id: 2, name: "Krishna2" }]
let userObj = { name: [{ id: 1, name: "Krishna" }, { id: 2, name: "Krishna2" }] }

// console.log(userArray)
// console.log(userArray[0].id)
// console.log(userObj.name)

// userArray.forEach((item, val) => {
//     console.log(item, val)
// })

// userObj.name.forEach((item, val) => {
//     console.log(item, val)
// })

userArray.find((item, val) => {
    console.log(item)
    console.log(item.id)
})

userArray.every(item => {
    // if (item.id > 0) {
    //     console.log(true)
    // }
})

console.log(userArray.every(item => item.id > 0))
console.log(userArray.some(item => item.id > 1))

