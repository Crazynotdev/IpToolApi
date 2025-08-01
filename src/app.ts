import express from "express"
import ipRoutes from "./routes/ip"

const app = express()
app.use(express.json())
app.use("/api/ip", ipRoutes)

export default app
