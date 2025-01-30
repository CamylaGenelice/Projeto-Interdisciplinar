const mongoose = require("mongoose")
const useServices = require("../services/services")
const { rawListeners } = require("../models/User-model")

const validID = (req,res,next) => {
    const id = req.params.id
        // verificando se o id é valido
    if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(400).send({msg:"Id invalido!"})
    }
    next()
}

const validUser = async (req,res,next) =>{
    const id = req.params.id
    const user = await useServices.findByIdService(id)

    if (!user){
        return res.status(400).send({msg:"Não achei o usuario"})
    }

    req.id = id
    req.user = user

    next()
}

module.exports = {
    validID, validUser
}