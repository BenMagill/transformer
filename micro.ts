/**
 * Run only one service - rest to be ignored (ideally deleted)
 */

const PORT = 8080

const service: Service = require('./services/SERVICE_NAME/index.js');

const http = require("http")
const express = require("express")
const app = express()
process.env.MODE = Mode.micro

service.routes.forEach(route => {
    app[route.method](route.path, route.handler)
})

const server = http.createServer(app)
server.listen(PORT)
console.log(`Listening on port ${PORT}`)