const {pokemonCard} = require('../models')
module.exports.viewAll = async function(req, res, next) {
    const pokemoncards = await pokemonCard.findAll();
    res.render('index', {pokemoncards});
};
