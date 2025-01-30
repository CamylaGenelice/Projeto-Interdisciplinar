const mongoose = require('mongoose')

const connectDatabase = () =>{

    mongoose.connect("mongodb+srv://userDB:diva739GJçq@formulario.oe2v2.mongodb.net/?retryWrites=true&w=majority&appName=formulario",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDb Conectado"))
    .catch((error) => console.log(error))
}


module.exports = connectDatabase