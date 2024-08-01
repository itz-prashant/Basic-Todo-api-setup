const TodoService = require('../service/todo-service')
const TodoRepository = require('../repository/todo-repository')

const todoService = new TodoService(new TodoRepository)

function getTodo(req, res){
    const response = todoService.getAlltodos()
    return res.json({
        data: response
    })
}

function  createTodo(req, res){
    const todoText = req.body.todoText
    todoService.create(todoText)
    return res.json({
        data: "New Data Created"
    })
}

module.exports = {
    getTodo,
    createTodo
}