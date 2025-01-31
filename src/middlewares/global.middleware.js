import mongoose from "mongoose"
import useServices from "../services/services.js"



export const validID = (req,res,next) => {
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

export const validUser = async (req,res,next) =>{
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

export default{
    validID, validUser
}