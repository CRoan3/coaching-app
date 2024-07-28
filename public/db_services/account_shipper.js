const db = require('./user_placer_connect');

const saveData = async (data) => {
    const { email, fname, gender, birth_year, lname, first_training_status } = data;

    const sql = `INSERT INTO user_data.users (email, fname, gender, birth_year, lname, first_training_status) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [email, fname, gender, birth_year, lname, first_training_status];

    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const saveHash = async (cred_data) => {
    const {email, password_hash} = cred_data;
    const sql = 'INSERT INTO user_data.credentials (email, pw_hash) VALUES (?,?)';
    const values = [email,password_hash];
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
module.exports = { saveData, saveHash };