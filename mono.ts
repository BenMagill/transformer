/**
 * Run all servcies at once under seperate paths
 */

const SERVICE_NAME = 'auth-service';
const PORT = 8080

const service: Service = require(`./${SERVICE_NAME}/index.js`);

import http from "http"
import express from "express"
const req = require("require-yml")
const config: Config = req("./config.yml")

const app = express()

config.services.forEach(serviceCfg => {
    const service: Service = require(`./${serviceCfg.name}/index.js`);
    const router = express.Router()
    service.routes.forEach(route => {
        router[route.method](route.path, route.handler)
    })
    app.use(`/${serviceCfg.namespace}`, router)
})

const server = http.createServer(app)
server.listen(PORT)
console.log(`Listening on port ${PORT}`)