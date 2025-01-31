import express from "express"
import userRoute from "./src/route/route.js"
import connectDataBase from "./src/databse/banco.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()


const port = process.env.PORT || 18000

connectDataBase()
app.use(express.json())
app.use("/user",userRoute)

app.listen(port, () => console.log('servidor rodando'))
