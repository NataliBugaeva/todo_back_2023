import {addTodolist, getTodolists, updateTodolist, deleteTodolist, deleteAllTaskFromTodo} from "../todo_db-model.js";


class TodolistsController {

    getALlTodolists(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        try {
            getTodolists().then(todos => {
               return res.json(({todos: todos}))
            })

        } catch(e) {
            res.status(500).json(e);
          //  console.log(e)
        }
    }


     updateTodolist(req, res) {
         // res.header("Access-Control-Allow-Origin", "*");
        const todo_id = req.params.id
        const { title, filter } = req.body;
        try {
            updateTodolist({todo_id, title, filter}).then(todo => {
               return res.json({todo_id: +todo_id, title, filter})
            })
        } catch(e) {
            res.status(500).json(e);
        }
    }

    addTodoList(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const {title, filter} = req.body;

        try {
            addTodolist({title, filter}).then(todo => {
                return res.json(({todos: todo}))
            })
        } catch (e) {
            res.status(500).json(e);
          //  console.log(e)
        }
    }

    deleteTodolist(request, result) {
        result.header("Access-Control-Allow-Origin", "*");
        const todoId = request.params.id;
       // console.log(todoId)
        try {
            deleteAllTaskFromTodo(todoId).then(res => {
                deleteTodolist(todoId).then(res => {
                    result.status(200).send({todoId: todoId})
                })
            })
        } catch(e) {
            result.status(500).json(e);
        }
    }

}

export default new TodolistsController();