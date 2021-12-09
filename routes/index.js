var express = require('express');
var router = express.Router();
const pokemoncardController = require('../controllers/pokemoncardController');

/* GET home page. */
router.get('/', pokemoncardController.viewAll);

module.exports = router;
