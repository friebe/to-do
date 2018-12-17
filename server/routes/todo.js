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
        const {title, description, dueDate} = req.query;
        let sql = `INSERT INTO todo (title, description, dueDate, done) VALUES('${title}', '${description}', ${dueDate}, false)`;

        db.query(sql, (err, result) => {
            res.send('todo added');
        })
    }
};
//getTodosById, update, delete, create