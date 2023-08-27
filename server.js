const express = require('express')
require('dotenv').config()
const configApp = require('./src/app.js')

const app = express()
const porta = process.env.porta

configApp(app)

app.listen(porta, () => console.log(`Servidor escutando porta ${porta}`))