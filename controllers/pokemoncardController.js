module.exports.viewAll = function(req,res,next){
    const pokemoncards =[ {
        id: 1,
        name: 'Pikachu',
        health: '50 HP',
        type: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        pokemonPicture: 'https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg',
        energy1: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        move1: 'Gnaw',
        number1: '10',
        energy2: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        move2: 'Lighting Bolt',
        number2: '50',
        weaknessImg: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        resistanceImg: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        retreatCostImg: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg'
    },
    {   id: 2,
        name: 'Pichu',
        health: '30 HP',
        type: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        pokemonPicture: 'https://www.drawingtutorials101.com/drawing-tutorials/Anime-and-Manga/Pokemon/pichu/how-to-draw-Pichu-from-Pokemon-step-0.png',
        energy1: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        move1: 'Gnaw',
        number1: '10',
        energy2: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        move2: 'Static',
        number2: '30',
        weaknessImg: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        resistanceImg: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg',
        retreatCostImg: 'http://pm1.narvii.com/5867/6c6a05dde0693c1dfe454912c83109f165f3f7ab_00.jpg'
    }];
    res.render('index', {pokemoncards});
};
