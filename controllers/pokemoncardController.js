const {pokemonCard} = require('../models')

module.exports.viewAll = async function(req, res, next) {
    const pokemoncards = await pokemonCard.findAll();
    res.render('index', {pokemoncards});
};

module.exports.renderEditForm = async function(req, res, next) {
    const pokemoncard = await pokemonCard.findByPk(
        req.params.id
    );
    res.render('edit', {pokemoncard});
};

module.exports.updatePokemonCard = async function(req,res){
    await pokemonCard.update(
        {
            name: req.body.name,
            health: req.body.health,
            type: req.body.type,
            pokemonPicture: req.body.pokemonPicture,
            energy1: req.body.energy1,
            move1: req.body.move1,
            number1: req.body.number1,
            energy2: req.body.energy2,
            move2: req.body.move2,
            number2: req.body.number2,
            weaknessImg: req.body.weaknessImg,
            resistanceImg: req.body.resistanceImg,
            retreatCostImg: req.body.retreatCostImg
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
};