require("dotenv").config();
const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getPokemonsApi = async () => {

    // Url for each pokemon
    const urls = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`
    ).then(({data: {results}}) => results.map(({ url }) => url));

    const pokemonPromise = urls.map(url => axios.get(url));

    const pokemonData = await Promise.all(pokemonPromise);

    const pokemons = pokemonData.map(({data}) => ({
        id: data.id,
        name: data.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        sprite: data.sprites.other.dream_world.front_default,
        types: data.types.map(type => type.type.name)
    }))

    return pokemons;
};

const getPokemonsDb = async () => {
    const pokemonsFromDb = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    const pokemons = pokemonsFromDb.map(pokemon => ({
        ...pokemon.dataValues,
        types: pokemon.dataValues.types.map(type => type.name)
    }))

    return pokemons
};

const getAllPokemons = async () => {
    const pokemonsFromAPI = await getPokemonsApi();
    const pokemonsFromDB = await getPokemonsDb();
    return [...pokemonsFromAPI, ...pokemonsFromDB]; 
};

async function getPokemons (req, res, next) {
    try {
        const { name } = req.query;

        const pokemons = await getAllPokemons();
        
        if (!name) return res.status(200).send(pokemons);

        const pokemon = await pokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(name.toLowerCase())
        );

        pokemon.length>0
        ? res.status(200).send(pokemon)
        : res.status(404).send("Pokemon Not Found");

    } catch (err){
        next(err)
    }

};

async function addPokemon(req, res) {
    const { name, hp, attack, defense, speed, height, weight, sprite, createdInDb, types } = req.body;

    if (!name) return res.status(500).send('Name is required');

    const createdPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        sprite,
        createdInDb
    });

    const createdDb = await Type.findAll({
        where: {name: types}
    });
    createdPokemon.addType(createdDb);

    return res.status(200).send('Pokemon successfully created')
};

async function getPokemonById(req, res) {
    const { id } = req.params;

    if (!id) return res.status(500).send('ID is required');

    const pokemons = await getAllPokemons();
    let pokemonId = await pokemons.filter(pokemon => pokemon.id == id);

    pokemonId.length
    ? res.status(200).json(pokemonId)
    : res.status(404).send("Pokemon ID Not Found");

};


module.exports = {
  getPokemons,
  addPokemon,
  getPokemonById, 
};