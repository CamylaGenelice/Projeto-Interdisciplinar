const express = require("express")
const userRoute = require("./src/route/route") // modulo de rotas
const app = express()
const connectDataBase = require("./src/databse/banco")

const port = 18000

connectDataBase()
app.use(express.json())
app.use("/user",userRoute)

app.listen(port, () => console.log('servidor rodando'))
