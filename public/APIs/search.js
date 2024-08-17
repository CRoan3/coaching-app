const express = require('express');
const app = express();
require('./config');
const exercise_videos = require('./exercisevideosModel');
const port = 4000;

const cors = require('cors');
app.use('*', cors());


app.get('/fitness_app/exercise_videos/:key', async (req, res) => {
    console.log(req.params['key']);
    let data = await exercise_videos.find(
        {
            "$or": [
                {exercise_name: {$regex: req.params['key']}},
                {exercise_url: {$regex: req.params['key']}},
                {exercise_tags: {$regex: req.params['key']}}
            ]
        }
    );
    res.send(data); 
    console.log(data);
});

app.use(express.json);


app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on ", port);
});
