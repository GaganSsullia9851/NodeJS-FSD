/**
 * CURL GET -X HTTP://localhost:9010/
 * CURL GET -X HTTP://localhost:9010/user or CURL GET -X HTTP://localhost:9010/user?name=Krishna
 */

const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const method = req.method
    const parsedUrl = url.parse(req.url, true)
    const pathName = parsedUrl.pathname


    if (method === "GET" && pathName == "/") {
        //res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify({ message: "Welcome to the App" }))
    }
    else if (method === "GET" && pathName == "/user") {
        //res.writeHead(200, { 'Content-Type': 'text/plain' })
        let name = parsedUrl.query.name || "Guest"
        let age = parsedUrl.query.age || 21
        // console.log(parsedUrl.query);

        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify({ message: `Welcome to the App ${name} ${age}` }))

    } else if (method === "POST" && pathName == "/data") {

        let body = ''

        req.on("data", chunk => {
            body += chunk
        })

        req.on("end", () => {
            let parsedData = JSON.parse(body)
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 200
            res.end(JSON.stringify({
                message: `Data fetched successfully`,
                data: parsedData
            }))
        })
    } else {
        //res.writeHead(200, { 'Content-Type': 'application/json' })
        res.setHeader('Content-Tye', 'application/json')
        res.statusCode = 404
        res.end(JSON.stringify({ error: `Resource not found` }))
    }
}).listen(9009, () => {
    console.log('Server is listning on port 9009')
})