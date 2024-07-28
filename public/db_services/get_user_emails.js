const db = require('./user_reader_connect');
const helper = require('./db_helper');
const config = require('../db_connect_configs/user_reader_config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT email FROM user_data.users LIMIT ${offset},${config.listPerPage}` //this will change to pull from view all_users
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

module.exports = {
    getMultiple
}