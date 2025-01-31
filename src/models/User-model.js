// modelo de documentos
import mongoose from "mongoose"


// Verificação, 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User",UserSchema)
 export default User