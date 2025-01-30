// Conexão com o banco
const User = require("../models/User-model")

const createServices = (body) => User.create(body)
// find função do mongoose para buscar usuarios dentro do db
const findAllServices = () => User.find()
const findByIdService = (id) => User.findById(id)

module.exports = {
    createServices,
    findAllServices,
    findByIdService,
}
