const { Router } = require('express');
const { getPokemons, addPokemon, getPokemonById} = require('../Controllers/pokemon');
const router = Router();


router.get('/', getPokemons);
router.get('/:id', getPokemonById);
router.post('/add', addPokemon);

module.exports = router;
