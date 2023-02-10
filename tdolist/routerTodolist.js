import Router from 'express';
import TodolistsController from "./TodolistsController.js";

const routerTodolist = new Router();

//получим все тудулисты
routerTodolist.get('/todolists', TodolistsController.getALlTodolists);
//создаем новый тудулист
routerTodolist.post('/todolists', TodolistsController.addTodoList);
//апдейтим тудулист
routerTodolist.put('/todolists/:id', TodolistsController.updateTodolist);
//удаляем тудулист
routerTodolist.delete('/todolists/:id', TodolistsController.deleteTodolist)

export default routerTodolist;
