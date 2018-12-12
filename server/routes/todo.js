module.exports = {
    getTodo: (req, res) => {
        let sql = "SELECT * FROM todo";

        db.query(sql, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            return res.json({
                data: result
            })
        });
    },
};
//getTodosById, update, delete, create