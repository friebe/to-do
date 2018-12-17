const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const config = require('./server/config/config');
const { getIndex } = require('./server/routes/index');
const { getTodo, addTodo } = require('./server/routes/todo');

const db =  mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});

db.connect(err => {
    if(err) {
        return err;
    }
});

global.db = db;
app.use(cors());

//routes (endpoints)
app.get('/', getIndex);
app.get('/api/todo', getTodo);
app.get('/api/add', addTodo);


app.listen(config.app.port, () => {
    console.log(`express server listen on port ${config.app.port}`)
});
