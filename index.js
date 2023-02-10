import express from 'express';
import routerTodolist from './tdolist/routerTodolist.js';
import cors from "cors";
import routerTask from "./task/routerTask.js";

const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}



//порт на котором будет запускаться сервер
const PORT = 5000;
//подключаем базу данных
//const DB_URL = "mongodb+srv://user:user@cluster0.sckxkji.mongodb.net/?retryWrites=true&w=majority"

//вызов функции express создает экземпляр нашего приложения
const app = express();

//const todo_db_model = require('./todo_db-model');

app.use(express.json());
app.use('/api', routerTodolist);
app.use('/api', routerTask);
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
    res.append('Access-Control-Allow-Headers', ['*', 'Authorization']);
    next();
});

// async function startApp() {
//     try {
//        await mongoose.connect(DB_URL);
//        mongoose.set('strictQuery', true);
// //приложение прослушивает 5000 порт, переданная вторым параметром функция запустится только в случае успешного запуска сервера
//         app.listen(PORT, () => {
//             console.log(`SERVER STARTED OP PORT ${5000}`)
//         })
//     } catch(e) {
//         console.log(e)
//     }
// }
//
// startApp();


app.listen(PORT, () => {
    console.log(`SERVER STARTED OP PORT ${5000}`)
})