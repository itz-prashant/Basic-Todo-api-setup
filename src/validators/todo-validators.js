function createTodoValidators(req, res, next){
    if(!req.body.todoText){
        return res.json({msg: "Invalid request"})
    }

    next()
}

module.exports = {
    createTodoValidators
}