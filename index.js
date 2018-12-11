const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const port = 4000;

const SELECT_ALL_TODO_ITEMS = 'SELECT * FROM todo';

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('/index')
});

app.get('/api/todos', (req, res) => {
    connection.query(SELECT_ALL_TODO_ITEMS, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})

app.listen(port, () => {
    console.log(`express server listen on port ${port}`)
});
