const db = require('./db_connect');
const getUserByEmail = async (email) => {
    const sql = 'SELECT * FROM user_data.users WHERE email = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [email], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
};
module.exports = { getUserByEmail }