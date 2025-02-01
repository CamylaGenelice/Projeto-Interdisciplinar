import express from "express"
import connectDataBase from "./src/databse/banco.js"
import dotenv from "dotenv"
dotenv.config()

import userRoute from "./src/route/route.js"
import autRoute from "./src/route/autenticacao.route.js"


const app = express()

const port = process.env.PORT || 18000

connectDataBase()
app.use(express.json())
app.use("/user",userRoute)
app.use("/autenticacao",autRoute)

app.listen(port, () => console.log('servidor rodando'))
