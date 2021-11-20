const { Router } = require('express');
const { getPokemons, addPokemon, getPokemonById} = require('../Controllers/pokemon');
const router = Router();


router.get('/', getPokemons);
router.get('/:id', getPokemonById);
router.post('/created', addPokemon);

module.exports = router;
