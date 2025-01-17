const express = require('express')

module.exports = function(server) {
    //Rotas da API

    const router = express.Router()
    server.use('/api', router)

    //Rotas do APP

    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}