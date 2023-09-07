const http = require('node:http') //Protocolo http
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    res.setHeader('Content-type', 'text/html; charset=utf-8')

    if (req.url === '/') {
        res.end('<h1>Mi página</>')
    } else if (req.url === '/imagen-joker.jpg') {
        fs.readFile('./placa.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal server error</h1>')
            } else {
                res.setHeader('Content-type', 'image/jpg')
                res.end(data)
            }
        })

    } else {
        res.statusCode = 404 //Not found
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port ${desiredPort}`);
})