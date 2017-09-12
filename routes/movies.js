const movieController = require('./../controllers/movieController.js');
let express = require('express');
let router = express.Router();

router.route('/movies')
    .get(movieController.list)
    .post(movieController.add);

router.route('/movies/:id')
    .get(movieController.find)
    .put(movieController.update);

module.exports = router;
