const express = require('express');
require('./mongo-config');
const exercise_videos = require('./exercisevideosModel');
const port = 5000;

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/fitness_app/exercise_videos/:key', async (req, res) => {
    console.log(req.params['key']);
    let data = await exercise_videos.find(
        {
            "$or": [
                {exercise_name: {$regex: req.params['key'].toLocaleLowerCase()}},
                {exercise_tags: {$regex: req.params['key'].toLocaleLowerCase()}}
            ]
        }
    );
    res.cookie('data', data);
    res.send(data); 
});

app.use(express.json);


app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on ", port);
});
