const express = require("express");
const app = express();
const port = 3000;
const userEmailRouter = require("./routes/get_user_emails");
const accountShipperRouter = require("./routes/account_shipper");
const db = require('./db_services/user_reader_connect');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());



//app.use("/", userEmailRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(err.message, err.stack);
    res.status(statusCode).json({ message });
});


app.use("/", accountShipperRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});