import express from "express"
import userRoute from "./src/route/route.js"
import connectDataBase from "./src/databse/banco.js"


const app = express()


const port = 18000

connectDataBase()
app.use(express.json())
app.use("/user",userRoute)

app.listen(port, () => console.log('servidor rodando'))
