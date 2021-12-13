var express = require('express');
var router = express.Router();
const pokemoncardController = require('../controllers/pokemoncardController');

/* GET home page. */
router.get('/', pokemoncardController.viewAll);
router.get('/edit/:id', pokemoncardController.renderEditForm);
router.post('/edit/:id', pokemoncardController.updatePokemonCard);



module.exports = router;
