import {addTodolist, getTodolists, updateTodolist, deleteTodolist, deleteTask} from "../todo_db-model.js";

class TodolistsController {

    getALlTodolists(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        try {
            getTodolists().then(todos => {
               return res.json(({todos: todos}))
            })

        } catch(e) {
            res.status(500).json(e);
            console.log(e)
        }
    }


     updateTodolist(req, res) {
         // res.header("Access-Control-Allow-Origin", "*");
        const id = parseInt(req.params.id)
        const { title, filter } = req.body;
        try {
            updateTodolist({id, title, filter}).then(todo => {
               return res.json({id, title, filter})
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
                console.log(todo)
                return res.json(({todos: todo}))
            })
        } catch (e) {
            res.status(500).json(e);
            console.log(e)
        }
    }

    deleteTodolist(request, result) {
       // result.header("Access-Control-Allow-Origin", "*");
        const id = parseInt(request.params.id)
        try {
            deleteTask(id).then(res => {
                deleteTodolist(id).then(res => {
                    result.status(200).send(`Todolist deleted with ID: ${id}`)
                })
            })
        } catch(e) {
            result.status(500).json(e);
        }
    }
}

export default new TodolistsController();