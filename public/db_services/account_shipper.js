const db = require('./user_placer_connect');

const saveData = async (data) => {
    const { email, fname, gender, birthdate, lname, first_training_status, username } = data;

    const sql = `INSERT INTO user_data.users (email, fname, gender, birthdate, lname, first_training_status,username) VALUES (?, ?, ?, ?, ?, ?,?)`;
    const values = [email, fname, gender, birthdate, lname, first_training_status, username];

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