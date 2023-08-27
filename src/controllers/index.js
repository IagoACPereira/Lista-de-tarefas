class Controller {
    static inicio = (req, res) => {
        res.redirect('/tarefas')
    }
}

module.exports = Controller