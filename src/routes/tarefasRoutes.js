const express = require('express')
const TarefasController = require('../controllers/TarefasController.js')

const tarefasRouter = express.Router()

tarefasRouter.get('/tarefas', TarefasController.exibirTodasAsTarefas)
tarefasRouter.get('/tarefas/:id', TarefasController.exibirTarefaPorId)
tarefasRouter.post('/tarefas', TarefasController.addTarefa)
tarefasRouter.put('/tarefas/:id', TarefasController.editarTarefaPorId)
tarefasRouter.delete('/tarefas/:id', TarefasController.deletarTarefaPorId)

module.exports = tarefasRouter