import { lazy } from "react"

const Button = lazy(() => import("./Button"))
const Input = lazy(() => import("./Input"))





export {
    Button,
    Input
}