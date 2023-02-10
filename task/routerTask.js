import Router from 'express';
import TaskController from "../task/TaskController.js";

const routerTask = new Router();

//получим все тудулисты
// routerTask.get('/tasks', TaskController.getALlTask);
// //создаем новый тудулист
// routerTask.post('/tasks', TaskController.create);
// //апдейтим тудулист
// routerTask.put('/tasks', TaskController.updateTask);
// //удаляем тудулист
routerTask.delete('/tasks', TaskController.deleteTask)

export default routerTask;