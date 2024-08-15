const express = require("express");
const app = express();
const port = 3000;
const authRoute = require("./routes/auth");
const cors = require('cors');


// allows us to parse json and urlencoded responses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors allows cross origin requests but it needs to be locked down before prod TODO

app.use(cors());



/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(err.message, err.stack);
    res.status(statusCode).json({ message });
});


app.use("/", authRoute)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});