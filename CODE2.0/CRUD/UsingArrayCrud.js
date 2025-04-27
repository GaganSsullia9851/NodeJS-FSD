const express = require('express')
const app = express()

app.use(express.json())

let users = [
    { id: 1, name: "Raj" },
    { id: 2, name: "Ravi" }
];


app.get('/', (req, res) => {
    //res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.setHeader('Content-Type','application/json')
    // res.statusCode=200
    //res.end(JSON.stringify({ message: "Welcome to the App" }))
    res.status(200).json({
        message: "Get All Users",
        data: users
    })
})


app.get('/user/:id', (req, res) => {
    //res.setHeader('Content-Type', 'application/json')
    //res.statusCode = 200
    let id = req.params.id
    console.log(id)
    let userId = users.find(ele => ele.id == id)
    if (userId) {
        res.status(200).json({
            message: "Welcome to the App",
            data: userId

        })
    } else {
        res.status(404).json({ error: "User not found" })
    }
})


app.post('/user/data', (req, res) => {
    //res.setHeader('Content-Type', 'application/json')
    //res.statusCode = 200
    let data = req.body
    console.log(data)

    users.push(data)
    res.status(201).json({
        message: "New Data added successfully",
        data: users
    })
    //res.status(200)
})

app.put('/user/:id', (req, res) => {
    //res.setHeader('Content-Type', 'application/json')
    //res.statusCode = 200
    let id = parseInt(req.params.id)

    const user = users.find(user => user.id == id)
    if (user) {
        user.name = req.body
        res.status(200).json({
            message: "User Updated successfully",
            data: user
        })
    } else {
        res.status(404).json({ error: "Failed to Update" })
    }

    // let id = req.params.id
    // let found = false
    // let Updateduser
    // users = users.map(user => {
    //     if (user.id == id) {
    //         found = true
    //         Updateduser = { ...ele, name: req.params.name }
    //         return Updateduser
    //     }
    //     return users
    // })


    // if (found) {
    //     res.status(200).json({
    //         message: "User Updated successfully",
    //         data: Updateduser
    //     })
    // } else {
    //     res.status(404).json({ error: "Failed to Update" })
    // }

})


app.delete('/user/:id', (req, res) => {
    //res.setHeader('Content-Type', 'application/json')
    //res.statusCode = 200
    let id = parseInt(req.params.id)

    let newUsers = users.filter(user => user.id !== id)
    if (newUsers) {
        res.status(200).json({
            message: "User deleted successfully",
            data: newUsers
        })
    } else {
        res.status(404).json({ error: "Not deleted" })
    }
})

app.listen(9005, () => {
    console.log('Server is listning on port 9005')
})


/**
 *
 * http://localhost:9000/users?id=1&name=Raj
 * 
 * req.query.id
 * req.query.name
 * 
 * 
 * http://localhost:9000/user/1
 * 
 *  req.params.id
 * 
 */
