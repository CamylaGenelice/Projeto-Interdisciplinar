import express from "express" 
import userController from "../controller/user.controller.js"
import {validID,validUser} from "../middlewares/global.middleware.js"


const route = express.Router()

route.post("users/register", userController.create)

//rota para criar
route.post("/", userController.create)

// rota para pegar um elemento no banco
// id é o nome do parametro (nome,idade,cidade etc...)
route.get("/",userController.findAll)
route.get("/:id",validID,validUser,userController.findById)
route.patch("/:id",validID,validUser,userController.update)

export default route