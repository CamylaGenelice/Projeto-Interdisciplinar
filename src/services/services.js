// Conexão com o banco
const User = require("../models/User-model")

const createServices = (body) => User.create(body)
// find função do mongoose para buscar usuarios dentro do db
const findAllServices = () => User.find()
const findByIdService = (id) => User.findById(id)
const updateService = (id, name,username,email,senha) => User.findOneAndUpdate({_id: id},{id, name,username,email,senha})


module.exports = {
    createServices,
    findAllServices,
    findByIdService,
    updateService,
}
    

