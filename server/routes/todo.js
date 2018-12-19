const errorMsg400 = 'Fehlende Paramter';

module.exports = {
    getTodo: (req, res) => {
        let sql = "SELECT * FROM todo ORDER BY id DESC";

        db.query(sql, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            return res.json({
                data: result
            })
        });
    },
    addTodo: (req,res) => {
        if(!req.query) {
            return res.status(400).send(errorMsg400);
        }
        else {
            const {title, description, dueDate} = req.query;
            let sql = `INSERT INTO todo (title, description, dueDate, done) VALUES('${title}', '${description}', '${dueDate}', false)`;

            db.query(sql, (err, result) => {
                res.send('todo added');
            })
        }

    },
    deleteTodo: (req,res) => {
        if(!req.query) {
            return res.status(400).send(errorMsg400);
        }
        else {
            const {id} = req.query;
            let sql = `DELETE FROM todo WHERE id=${id}`;

            db.query(sql, (err, result) => {
                res.send('todo is deleted');
            })
        }
    },
    updateStatusTodo: (req,res) => {
        if (req.query) {
            return res.status(400).send(errorMsg400);
        }
        else {
            const {id} = req.query;
            let sql = `UPDATE todo SET done=1 WHERE id=${id}`;

            db.query(sql, (err, result) => {
                res.send('todo status is updated');
            })
        }
    }
};
//getTodosById, update, delete, create