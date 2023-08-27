const { Sequelize } = require('sequelize')
require('dotenv').config

const sequelize = new Sequelize(process.env.database, process.env.usuarioDb, process.env.senhaDb, {
    host: process.env.hostDb, 
    dialect: process.env.dialectDb
})

async function conexaoDb() {
    try {
        await sequelize.authenticate()
        console.log('Conectou ao banco!');
    } catch (error) {
        console.log('Não conectou ao banco!');
    }
}

module.exports = {sequelize, conexaoDb}