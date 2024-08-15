var express = require('express')
var exerController = require('./exercises/exerController');

const router = express.Router();

router.route('/fitness_app/exercise_videos/:key').get(exerController.searchExerController);

module.exports = router;