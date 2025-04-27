const http = require('http')

const port = 9010
http.createServer((request, respsone) => {
    respsone.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.writeHead(200,{'Content-Type':'text/plain'})
    // res.writeHead(200,{'Content-Type':'application/json'})
    respsone.end("Hello")
}).listen(port, () => {
    console.log(`Server is listning on port ${port}`);
})


let newServer = http.createServer((request, respsone) => {
    //res.writeHead(200, { 'Content-Type': 'application/json' })
    respsone.end("Hello Good Morning")
})
newServer.listen(9011, () => {
    console.log(`Server is listning on port 9011`);
})


// using res.setHeader

http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.writeHead(200, { 'Content-Type': 'text/xml' })
    // res.setHeader('Content-Type', 'application/xml')
    // res.setHeader('Content-Type', 'application/pdf')
    // res.setHeader('Content-Type', 'application/zip')
    // res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    res.setHeader('Content-Type', 'application/xml')
    res.statusCode = 200
    res.end(JSON.stringify({ message: "Hai" }))
}).listen(9999, () => {
    console.log("Server is listning on poort 9999")
})

/**
 * text format
 * 1. text/plain        plain text
 * 2. text/xml          xml as text
 * 3. text/html         html document 
 * 4. text/css          CSS stylesheet
 * 5. text/javascript    javascript code
 * 6. text/markdown      markdown text
 *  */

/**
 * Data format
 * 
 * 1. application/json              JSON data
 * 2. application/ld+json          linked Json data (used in seo)
 * 3. application/xml                XML data
 * 4. application/pdf                PDF files
 * 5. application/zip                ZIP archieves
 * 6. application/x-www-form-urlencoded     Form data(key=value&key2=value2)
 * 6. application/javascript
 * 8. application/graphql                 GraphQL queries
 * 
 */

