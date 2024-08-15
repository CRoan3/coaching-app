var exerModel = require('./exercisevideosModel');

/* module.exports.searchExerDBService = app.get('/fitness_app/exercise_videos/:key', async (req, res) => {
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
    res.cookie('data', data);
    res.send(data); 
});

 */











/* 
(exerDetails) => {
    return new Promise(function myFn(resolve, reject){
        exerModel.find({exercise_name:exerDetails}, function returnData(error, result){
            if(error)
            {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
} */


