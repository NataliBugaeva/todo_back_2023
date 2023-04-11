import express from 'express';
import routerTodolist from './tdolist/routerTodolist.js';
import cors from "cors";
import routerTask from "./task/routerTask.js";
import bodyParser from "body-parser";

const corsOptions = {
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}

//порт на котором будет запускаться сервер
const PORT = 5000;

//вызов функции express создает экземпляр нашего приложения
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api', routerTodolist);
app.use('/api', routerTask);
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
    res.append('Access-Control-Allow-Headers', ['*', 'Authorization']);
    next();
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED OP PORT ${5000}`)
})