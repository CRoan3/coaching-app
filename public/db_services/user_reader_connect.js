const mysql = require('mysql2/promise');
const config = require('../db_connect_configs/user_reader_config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}