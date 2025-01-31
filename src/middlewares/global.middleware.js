const mongoose = require("mongoose")
const useServices = require("../services/services")
const { rawListeners } = require("../models/User-model")

const validID = (req,res,next) => {
    try {
        const id = req.params.id
        // verificando se o id é valido
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({msg:"Id invalido!"})
        }
        next()
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}

const validUser = async (req,res,next) =>{
    try {
        const id = req.params.id
        const user = await useServices.findByIdService(id)

        if (!user){
            return res.status(400).send({msg:"Não achei o usuario"})
    }

        req.id = id
        req.user = user

        next()
    } catch (error) {
        res.status(500).send({msg:error.message})
    }

    
}

module.exports = {
    validID, validUser
}