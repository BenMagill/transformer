/**
 * Run all servcies at once under seperate paths
 */

const SERVICE_NAME = 'auth-service';
const PORT = 8080


import http from "http"
import express from "express"
import { getConfig } from "./transformer";
const config = getConfig()

const app = express()
process.env.MODE = Mode.mono

config.services.forEach(serviceCfg => {
    const service: Service = require(`./services/${serviceCfg.name}/index.js`);
    const router = express.Router()
    service.routes.forEach(route => {
        router[route.method](route.path, route.handler)
    })
    app.use(`/${serviceCfg.namespace}`, router)
})

const server = http.createServer(app)
server.listen(PORT)
console.log(`Listening on port ${PORT}`)