var exerService = require('./exerService');

var searchExerController = async (req, res) => 
{
    console.log(req.params['key']);
    var result = await exerService.searchExerDBService(req.params['key']);

    if(result) {
        res.send({ "status": true, "data":result});
    } else {
        res.send({ "status": false, "data":"Exercise not found."});
    }

}

module.exports = { searchExerController };