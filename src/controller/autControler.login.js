import bcrypt from 'bcrypt'
import {loginService} from ""

const login = async (req,res) => {

    const {email, senha} = req.body

    const user = loginService(email)

    const senhaIsValid = bcrypt.compare(senha, user.senha)


    
    
    
    res.send("LOgin okay")
}
export {login}