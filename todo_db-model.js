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
    if(!todo.id) {
            throw new Error("Id не указан");
        }
    return new Promise(function(resolve, reject) {
        pool.query('UPDATE todos SET title = $2, filter = $3 WHERE todo_id = $1', [todo.id, todo.title, todo.filter], (error, results) => {
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
             console.log(results.rows)
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

export const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM tasks WHERE todo_id=$1', [id], (error, result) => {
            if (error) {
                reject(error)
            }
            resolve();
        })
    })
}


