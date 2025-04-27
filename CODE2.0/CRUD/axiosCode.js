const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

app.get('/user', async (req, res) => {
    try {
        const response = await axios.get(baseUrl)
        res.status(200).json({
            message: "success",
            data: response.data
        })
    } catch (err) {
        res.status(500).json({ error: "Failed to fecth users" })
    }
})

app.get('/user/:id', async (req, res) => {
    try {
        const response = await axios.get(baseUrl)
        res.status(200).status({
            message: "Success",
            data: response.data
        })
    } catch (err) {
        res.status(500).json({ err: "" })
    }
})


app.post('/data', async (req, res) => {
    try {
        const response = await axios.post(baseUrl, req.body)
        res.status(201).json({
            message: "Created Successfully",
            data: response.data
        })
    } catch (err) {
        res.status(500).json({ error: "Failed to fecth users" })
    }
})

app.put('/user/:id', async (req, res) => {
    try {
        const response = await axios.put(`${baseUrl}/${req.params.id}`, req.body)
        res.status(201).json({
            message: "Updated Successfully",
            data: response.data
        })
    } catch (err) {
        res.status(500).json({ error: "Failed to fecth users" })
    }
})

app.delete('/user/:id', async (req, res) => {
    try {
        await axios.delete(`${baseUrl}/${req.params.id}`)
        res.status(201).json({
            message: "deleted Successfully",
        })
    } catch (err) {
        res.status(500).json({ error: "Failed to delete" })
    }
})




app.listen(9002, () => {
    console.log("Server is listning on port 9002")
})