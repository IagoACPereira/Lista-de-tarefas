const configApp = app => {
    const express = require('express')
    const router = require('./routes/index.js')
    const tarefasRouter = require('./routes/tarefasRoutes.js')
    const {conexaoDb} = require('./config/db.js')
    
    conexaoDb()

    app.use(
        express.json(),
        express.urlencoded({
            extended: true
        }),
        router,
        tarefasRouter
    )
}

module.exports = configApp