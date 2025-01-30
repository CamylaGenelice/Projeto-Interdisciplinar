
const useServices = require("../services/services")



const create =  async (req, res) =>{
    const {name,username,email,senha} = req.body

    if (!name || !username || !email || !senha){
        res.status(400).send({mensagem:"Preencha todos os campos para registro!"})
    }
    
    const user =  await useServices.create(req.body)
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

module.exports = {create}