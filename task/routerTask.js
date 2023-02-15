import Router from 'express';
import TaskController from "../task/TaskController.js";

const routerTask = new Router();

//получим все тaски
routerTask.get('/tasks', TaskController.getAllTasks);
// //создаем новую таску
routerTask.post('/tasks', TaskController.addTask);
//апдейтим таски
 routerTask.put('/tasks/:id', TaskController.updateTask);
//удфляемм конкретную таску по ее айдишке
routerTask.delete('/tasks/:id', TaskController.deleteCertainTask);
// // //удаляем все такски из конкретного тудулиста при его удалении
// routerTask.delete('/tasks/deleteAll/:todoId', TaskController.deleteAllTasksFromCertainTodo);

export default routerTask;