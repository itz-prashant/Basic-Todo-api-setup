class TodoService {

    constructor(todoRepository){
        this.todoRepository = todoRepository
    }
    create(todoText){
        this.todoRepository.insert(todoText)
    }
    getOneTodo(id){
        this.todoRepository.get(id)
    }
    getAlltodos(){
        this.todoRepository.getAll()
    }
}

module.exports = TodoService