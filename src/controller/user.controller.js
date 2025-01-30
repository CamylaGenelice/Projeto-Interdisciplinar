const useServices = require("../services/services")
const mongoose = require("mongoose")


const create =  async (req, res) =>{
    const {name,username,email,senha} = req.body

    if (!name || !username || !email || !senha){
        res.status(400).send({mensagem:"Preencha todos os campos para registro!"})
    }
    
    const user =  await useServices.createServices(req.body)
    // verificação
    if(!user){
        return res.status(400).send({message: "Error ao criar usuario! "})
    }
    
    res.status(201).send({
        message:("dados recebidos"),
        user:{
            id: user._id,
            name,
            username,
            email,
            
        }
       
    })
    
}

const findAll = async (req, res) => {
    const users = await useServices.findAllServices()

    if(users.length === 0){
        return res.status(400).send({messagen: "Não ha usuários castrados"})
    }
    res.send(users)
}

const findById = async (req, res) =>{
    const id = req.params.id
    // verificando se o id é valido
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({msg:"Não achei o usuario"})
    }

    const user = await useServices.findByIdService(id)
    if (!user){
        return res.status(400).send({msg:"Não achei o usuario"})
    }
    res.send(user)
}


module.exports = {
    create,findAll, findById,
}