// Importación de módulos de versiones anteriores
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const morgan = require("morgan")
const usuariosRoute = require('./routes/usuariosRoute');
const authRoute = require("./routes/authRoute")
const cors = require('cors');



// crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    }
)

app.use(express.json({ extended: true }))
app.use(express.urlencoded())
app.use(morgan("tiny"))
app.use(cors());


//importar rutas
app.use('/api/usuarios', usuariosRoute)
app.use('/api/auth', authRoute)


// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
})
