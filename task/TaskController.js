import {addTodolist, deleteAllTaskFromTodo, addNewTask, getAllTasks, deleteTask, updateTask} from "../todo_db-model.js";


class TaskController {
    // async createTask(req, res) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     try {
    //         const task = await TaskService.create(req.body);
    //         res.json(task);
    //     } catch (e) {
    //         res.status(500).json(e);
    //     }
    // }

    // async getALlTodolists(req, res) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     try {
    //         //без параметров вепнутся все тудулисты
    //         const todolists = await TodolistService.getALlTodolists();
    //         return res.json({todos: todolists})
    //     } catch(e) {
    //         res.status(500).json(e);
    //     }
    // }
    //
    // async updateTodolist(req, res) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     try {
    //         const updatedTodo = await TodolistService.updateTodolist(req.body);
    //         return res.json(updatedTodo)
    //     } catch(e) {
    //         res.status(500).json(e);
    //     }
    // }
    //
    // async deleteTodolist(req, res) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     try {
    //         const deletedTodo = await TodolistService.deleteTodolist(req.body._id);
    //         return res.json(deletedTodo)
    //     } catch(e) {
    //         res.status(500).json(e);
    //     }
    // }

  /*  deleteAllTasksFromCertainTodo(request, result) {
        const {todoId} = request.body;
        try {
            deleteAllTaskFromTodo(todoId).then(res => {
                debugger
                deleteTodolist(todoId).then(r => {
                    debugger
                    return result.status(200).send(`Todo was deleted`)
                })
               // return result.status(200).send(`Task(s) deleted with todoID: ${todoId}`)
            })
        } catch (e) {
            result.status(500).json(e);
        }
    }*/

    getAllTasks(request, result) {
        result.header("Access-Control-Allow-Origin", "*");
        try {
            getAllTasks().then(tasks => {
                console.log(tasks)
                return result.json(({tasks}))
            })
        } catch (e) {
            result.status(500).json(e);
            //  console.log(e)
        }
    }

    addTask(request, result) {
        result.header("Access-Control-Allow-Origin", "*");
        const {title, status, todo_id} = request.body;
        try {
            addNewTask({title, status, todo_id}).then(task => {
                console.log(task)
                return result.json(({task}))
            })
        } catch (e) {
            result.status(500).json(e);
            //  console.log(e)
        }
    }

    deleteCertainTask(request, result) {
        const taskId = +request.params.id;
        try {
            deleteTask(taskId).then(res => {
                return result.status(200).send({taskId: taskId})
            })
        }catch (e) {
            result.status(500).json(e);
        }
    }

    updateTask(request, result) {
        result.header("Access-Control-Allow-Origin", "*");
        const {title, status} = request.body;
        const task_id = +request.params.id;
        try {
            updateTask({task_id, title, status}).then(res => {
                return result.status(200).send({task: res.rows[0]})
            })
        }catch (e) {
            result.status(500).json(e);
        }
    }
}

export default new TaskController();