const useServices = require("../services/services")
/*const mongoose = require("mongoose") */


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
    // A requisição traz o user
    const user = req.user
    res.send(user)
}

const update = async (req,res) => {
    const {name,username,email,senha} = req.body

    if (!name && !username && !email && !senha){
        res.status(400).send({mensagem:"Submeta pelo menos um campo para atualizar!"})
    }
    
    const {id,user} = req
    
    /*const user = await useServices.findByIdService(id)*/

    await useServices.updateService(
        id, name,username,email,senha,
    )
    return res.send({msg: "Usuario foi atualizado com sucesso! "})
}

module.exports = {
    create,findAll, findById, update,
}