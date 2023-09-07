const { log } = require('node:console')
const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000  //por defecto 3000

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => { //Puerto 0 automaticamente busca el primer puerto que tenga vacio
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`);
    })
})