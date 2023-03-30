type Route = {
    path: string,
    method: "get" | "post" | "put" | "delete",
    handler: (req: any, res: any) => void
}

type Service = {
    routes: Route[]
}

type Config = {
    services: {
        name: string
        namespace: string
    }[]
}