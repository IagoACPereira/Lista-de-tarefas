const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.js')

const Tarefas = sequelize.define('tarefas', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pendente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    progresso: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{})

// Tarefas.sync({force: true})
 
module.exports = Tarefas