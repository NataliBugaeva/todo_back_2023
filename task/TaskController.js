import {deleteAllTaskFromTodo} from "../todo_db-model.js";


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

    deleteCertainTask(request, result) {
        const taskId = request.params.id;
        try {
            deleteAllTaskFromTodo(taskId).then(res => {
                debugger
                return result.status(200).send(`Task was deleted with ID: ${taskId}`)
            })
        }catch (e) {
            result.status(500).json(e);
        }
    }
}

export default new TaskController();