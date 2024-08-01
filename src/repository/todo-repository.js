const todos = []

class TodoRepository {

   insert(todoText){
        todos.push({
            id: todos.length,
            test: todoText
        })
    }  
    getAll(){
        return todos
    }
    get(id){
        return todos.filter(todo => todo.id == id)[0]
    }
}

module.exports = TodoRepository