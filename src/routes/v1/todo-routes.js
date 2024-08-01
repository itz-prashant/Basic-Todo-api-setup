const express = require('express')
const { getTodo, createTodo } = require('../../controllers/todo-controllers')
const { createTodoValidators } = require('../../validators/todo-validators')

const todoRouter  = express.Router()

todoRouter.get('/', getTodo)

todoRouter.post('/', createTodoValidators, createTodo)

module.exports = todoRouter