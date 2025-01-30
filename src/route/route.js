const route = require("express").Router()
const userController = require("../controller/user.controller")

//rota para criar
route.post("/", userController.create)

// rota para pegar um elemento no banco
// id é o nome do parametro (nome,idade,cidade etc...)
route.get("/",userController.findAll)
route.get("/:id",userController.findById)

module.exports = route