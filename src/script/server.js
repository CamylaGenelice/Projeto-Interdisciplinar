const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 13000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://userDB:<diva739GJçq>@formulario.oe2v2.mongodb.net/?retryWrites=true&w=majority&appName=formulario', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Modelo de Usuário
const UserSchema = new mongoose.Schema({
    nome: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Rota de Cadastro
app.post('/api/register', async (req, res) => {
    const { nome, email, password } = req.body;
    try {
        const user = new User({ nome, email, password });
        await user.save();
        res.status(201).send({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(400).send({ error: 'Erro ao registrar usuário', details: error });
    }
});

// Rota de Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).send({ message: 'Login realizado com sucesso!', user });
        } else {
            res.status(401).send({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Erro no servidor', details: error });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
