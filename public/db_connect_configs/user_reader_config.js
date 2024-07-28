const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "192.168.0.215",
        port: 3306,
        user: "user_reader",
        password: "zJz$qU%^Ba#qaqWpb4",
        database: "fitness_app",
        connectTimeout: 60000,
        multipleStatements: true
    },
    listPerPage: 10,
};
module.exports = config;