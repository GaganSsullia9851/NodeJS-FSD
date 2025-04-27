const bodyparser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.json())


let userArray = [{ id: 1, name: "Krishna" }, { id: 2, name: "Ram" }]

app.get('/user', (req, res) => {
    try {
        res.status(200).json({
            message: "Data fetched successfully",
            data: userArray
        })
    } catch (err) {
        console.log("All user data not found")
    }

})

app.get('/user/:id', (req, res) => {
    userArray.forEach((item) => {
        if (item.id == req.params.id) {
            res.status(200).json({
                message: "User particular id fetched successfully",
                data: item
            })
        }
    })
    res.status(404).json({ "message": "Data Not found" })
    // userArray.find(item => {
    //     if (item.id == req.params.id) {
    //         res.status(200).json(item)
    //     }
    // })
    // res.status(404).json({ "message": "Data Not found" })
})


app.post('/user/add', (req, res) => {
    const data = req.body
    data.forEach(item => {
        userArray.push({ id: item.id, name: item.name })
    })
    //arr.push(req.body)
    res.status(200).json({ "messgae": "Data added", "data": userArray })

})

app.delete('/user/delete/:id', (req, res) => {
    userArray = userArray.filter(item => item.id !== parseInt(req.params.id))
    res.status(200).json({ "messgae": "Data deleted successfully", "data": userArray })
})

app.put('/user/update/:id', (req, res) => {
    let data = req.body
    let id = req.params.id
    console.log("Gagan==" + id + " " + JSON.stringify(data.name))
    console.log("Gagan==", data)
    userArray.map(item => {
        if (item.id == id) {
            { item.id = data.id, item.name = data.name }
            res.status(200).json({ "messgae": "Update done successfully", "data": userArray })
        }
    })
    res.status(200).json({ "messgae": "failed to update" })
})

app.listen(9010, () => {
    console.log("Server is listning on port 9010")
})