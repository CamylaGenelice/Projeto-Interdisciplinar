const route = require("express").Router()
const userController = require("../controller/user.controller")
const {validID, validUser} = require("../middlewares/global.middleware")
//rota para criar
route.post("/", userController.create)

// rota para pegar um elemento no banco
// id é o nome do parametro (nome,idade,cidade etc...)
route.get("/",userController.findAll)
route.get("/:id",validID,validUser,userController.findById)
route.patch("/:id",validID,validUser,userController.update)

module.exports = route