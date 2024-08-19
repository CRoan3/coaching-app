const path = require('path');
require('dotenv').config();
config()

module.exports = {
    mysql: {
        database: process.env.MYSQL_DB,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT
    },
    mysql_placer: {
        password: process.env.USER_PLACER_PASSWORD,
        user: process.env.USER_PLACER_USER
    },
    mysql_reader: {
        password: process.env.USER_READER_PASSWORD,
        user: process.env.USER_READER_USER
    },
    mysql_root: {
        password: process.env.USER_ROOT_PASSWORD,
        user: process.env.USER_ROOT_USER
    },
    jwt_secret: process.env.JWT_LOGIN_SECRET
};