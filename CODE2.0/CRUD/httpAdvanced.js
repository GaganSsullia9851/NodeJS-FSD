// curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d '{"x":10}'
// Method GET POST PUT UPDATE
// Pathname / /user /add
// URL http://localhost:3000
// Body 
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const method = req.method
    const parsedUrl = url.parse(req.url, true)
    const pathName = parsedUrl.pathname

    res.setHeader('Content-Type', 'application/json')
    // res.statusCode = 200
    // res.end(JSON.stringify({ message: 'Hai' }))

    if (method == 'GET' && pathName == '/') {
        res.writeHead(200)
        res.end(JSON.stringify({ message: 'Welcome to Home route!' }))
    }

    else if (method == 'GET' && pathName == '/user') {
        const name = parsedUrl.query.name || 'Guest'
        res.writeHead(200)
        res.end(JSON.stringify({ 'messagae': `Welcome, ${name}` }))

    } else if (method == 'POST' && pathName == '/data') {
        let body = ''

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const parsedData = JSON.parse(body)
            res.writeHead(201);
            res.end(JSON.stringify({
                message: "Data received successfully",
                data: parsedData
            }))
        })
    } else {
        res.writeHead(404)
        res.end(JSON.stringify({ error: "Route not found" }))
    }

});


server.listen(9015, () => {
    console.log('server is listning on port 9015')
})