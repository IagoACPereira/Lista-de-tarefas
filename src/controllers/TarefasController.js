const Tarefas = require('../models/TarefasModels.js')

class TarefasController {
    static exibirTodasAsTarefas = async (req, res) => {
        try {
            const tarefas = await Tarefas.findAll()           
            
            res.status(200).json(tarefas)  
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    } 

    static exibirTarefaPorId = async (req, res) => {
        try {
            const {id} = req.params

            const tarefa = await Tarefas.findByPk(id)

            res.status(200).json(tarefa)
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

    static addTarefa = async (req, res) => {
        try {
            const tarefa = {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                pendente: true,
                progresso: false,
                concluido: false,
            }

            await Tarefas.create(tarefa)

            res.status(200).json({
                mensagem: 'Dados incluídos com sucesso!',
                dados: tarefa,
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

    static editarTarefaPorId = async (req, res) => {
        try {
             const {id} = req.params

             const tarefa = await Tarefas.findByPk(id)

             const dados = {
                 titulo: req.body.titulo,
                 descricao: req.body.descricao,
                 pendente: req.body.pendente,
                 progresso: req.body.progresso,
                 concluido: req.body.concluido,
             }

             tarefa.update(dados)

             res.status(200).json({
                mensagem: 'Dados atualizados com sucesso!',
                dados,
                status: 200
             })
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

    static deletarTarefaPorId = async (req, res) => {
        try {
            const {id} = req.params

            const tarefa = await Tarefas.findByPk(id)
            await tarefa.destroy()

            res.status(200).json({
                mensagem: 'Dados excluídos com sucesso!',
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }
}

module.exports = TarefasController