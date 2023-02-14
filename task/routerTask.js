import Router from 'express';
import TaskController from "../task/TaskController.js";

const routerTask = new Router();

//получим все тудулисты
// routerTask.get('/tasks', TaskController.getALlTask);
// //создаем новый тудулист
// routerTask.post('/tasks', TaskController.create);
// //апдейтим тудулист
// routerTask.put('/tasks', TaskController.updateTask);
//удфляемм конкретную таску по ее айдишке
routerTask.delete('/tasks/:id', TaskController.deleteCertainTask);
// // //удаляем все такски из конкретного тудулиста при его удалении
// routerTask.delete('/tasks/deleteAll/:todoId', TaskController.deleteAllTasksFromCertainTodo);

export default routerTask;