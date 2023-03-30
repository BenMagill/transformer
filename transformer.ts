// TODO: this should be a package
const req = require("require-yml")
const config: Config = req("./config.yml")

export function inMono() {
    return process.env.MODE == Mode.mono;
}

export function inMicro() {
    return process.env.MODE == Mode.micro;
}

export function getServices() {
    console.log(config.services)
    return config.services;
}