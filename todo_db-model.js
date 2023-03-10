import pg  from "pg";

const Pool = pg.Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_app',
    password: 'test123',
    port: 5432,
});

 export const getTodolists = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM todos ORDER BY todo_id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
};

export const updateTodolist = (todo) => {
    if(!todo.todo_id) {
            throw new Error("Id не указан");
        }
    return new Promise(function(resolve, reject) {
        pool.query('UPDATE todos SET title = $2, filter = $3 WHERE todo_id = $1 RETURNING *', [todo.todo_id, todo.title, todo.filter], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    })
}


export const addTodolist = (todo) => {
     return new Promise((resolve, reject) => {
         pool.query('INSERT INTO todos (title, filter) VALUES ($1, $2) RETURNING *', [todo.title, todo.filter], (error, results) => {
             if (error) {
                 reject(error)
             }
             //console.log(results.rows)
             resolve(results.rows);
         })
     })
}

export const deleteTodolist = (id) => {
     return new Promise((resolve, reject) => {
         pool.query('DELETE FROM todos WHERE todo_id=$1', [id], (error, result) => {
             if (error) {
                 reject(error)
             }
             resolve();
         })
     })
}

export const getAllTasks = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM tasks', (error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result.rows);
        })
    })
}

export const addNewTask = (body) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO tasks (title, status, todo_id) VALUES ($1, $2, $3) RETURNING *', [body.title, body.status, body.todo_id], (error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result.rows);
        })
    })
}


export const deleteAllTaskFromTodo = (todoId) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM tasks WHERE todo_id=$1', [todoId], (error, result) => {
            if (error) {
                reject(error)
            }
            resolve();
        })
    })
}


export const deleteTask = (taskId) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM tasks WHERE task_id=$1', [taskId], (error, result) => {
            if (error) {
                reject(error)
            }
            resolve();
        })
    })
}

export const updateTask = (body) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE tasks SET title = $2, status = $3 WHERE task_id = $1 RETURNING *', [body.task_id, body.title, body.status], (error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result);
        })
    })
}

