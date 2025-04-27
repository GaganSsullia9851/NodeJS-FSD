const http = require('http')
const bodyparser = require('body-parser')

let obj = {
    "name": "Krishna"
}
const app = bodyparser.json()


// http.createServer((req, res) => {
//     //res.statusCode(200).json(obj)
//     res.end("Hai")
// }).listen(9001, () => {
//     console.log(`Server is listning on port 9001`)
// })

const server = http.createServer((req, res) => {
    //res.statusCode(200).json(obj)

    try {
        res.end(app(obj))
    } catch (e) {
        res.end("Error in data")
    }
})

function serverListen() {
    return console.log(`Server is listning on port 9005`)
}

server.listen(9005, serverListen)