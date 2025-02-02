// ARQUIVO PRINCIPAL INDEX

import express from "express"
import connectDataBase from "./src/databse/banco.js"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors";

import userRoute from "./src/route/route.js"
import autRoute from "./src/route/autenticacao.route.js"



const app = express()

const port = process.env.PORT || 18000

app.use(cors({
    origin: "http://127.0.0.1:5500", // Permite apenas requisições desse domínio
    methods: "GET,POST,PUT,DELETE", // Define os métodos HTTP permitidos
    allowedHeaders: "Content-Type,Authorization" // Define os headers permitidos
}));


connectDataBase()
app.use(express.json())
app.use("/user",userRoute)
app.use("/autenticacao",autRoute)

app.listen(port, () => console.log('servidor rodando'))
