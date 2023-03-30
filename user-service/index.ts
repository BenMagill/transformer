import { Request, Response } from "express"
import { getServices } from "../transformer"
module.exports = {
    routes: [
        {
            path: "/",
            method: "get",
            handler: (req: Request, res: Response) => {
                getServices()
                res.send("Hello world2!")
            }
        }
    ]
}