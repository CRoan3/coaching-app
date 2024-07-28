const db = require('./user_reader_connect');

const grabHash = async (email) => {
    const sql = 'SELECT password_hash FROM users WHERE email = ?';

    return new Promise((resolve, reject) => {
        db.query(sql, [email], (err, results) => {
            if (err) {
                reject(err);
            } else if (results.length === 0) {
                resolve(null); // Or handle user not found case appropriately
            } else {
                resolve(results[0].password_hash);
            }
        });
    });
};


module.exports = { grabHash };