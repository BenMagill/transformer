import { Request, Response } from "express"

module.exports = {
    routes: [
        {
            path: "/",
            method: "get",
            handler: (req: Request, res: Response) => {
                res.send("Hello world!")
            }
        }
    ]
}