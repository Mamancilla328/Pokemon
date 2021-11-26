require("dotenv").config();
const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getPokemonsApi = async () => {
    const apiUrl = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=200`
      );//me traigo los primeros 200
    
    const allUrl = await apiUrl.data.results.map(e => e.url) // me traigo todas las url 
    const allData = await allUrl.map( e => axios.get(e)) // itero sobre todas la url para conseguir la informacion 
    const getAllData = Promise.all(allData)
            .then( e =>{
                let pokemon = e.map( e => e.data)
                let pokeData = [];
                pokemon.map( e =>  {  
                    pokeData.push({
                        id: e.id,
                        name: e.name,
                        hp: e.stats[0].base_stat,
                        attack: e.stats[1].base_stat,
                        defense: e.stats[2].base_stat,
                        speed: e.stats[5].base_stat,
                        height: e.height,
                        weight: e.weight,
                        sprite: e.sprites.other.dream_world.front_default,
                        types: e.types.length < 2 ? [e.types[0].type.name] : [e.types[0].type.name, e.types[1].type.name]
                    })
                })
                return pokeData;
            })

    // console.log (getAllData)
    return getAllData;

};

const getPokemonsDb = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
};

const getAllPokemons = async () => {
    const apiInfo = await getPokemonsApi();
    const dbInfo = await getPokemonsDb();
    const allPokemons = apiInfo.concat(dbInfo);
    return allPokemons; 
};

async function getPokemons (req, res, next) {
    try{
        const {name} = req.query;
        const allPokemons = await getAllPokemons();

        if(!name){
            res.status(200).send(allPokemons);
        }else if (name){
            const pokemon = await allPokemons.filter( e => 
                e.name.toLowerCase().includes(name.toLowerCase())
                );
            pokemon.length>0
            ? res.status(200).send(pokemon)
            : res.status(404).send("Pokemon Not Found");
        }

    }catch (err){
        next(err)
    }

};

async function addPokemon(req, res) {
    const {name, hp, attack, defense, speed, height, weight, sprite, createdInDb, types} = req.body;
    try {
        if(name) {
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
        } else {
            return res.status(404).send('Pokemon was not created');
        }
    } catch (error) {
        console.log(error);    
    }
   
};

async function getPokemonById(req, res) {
    const {id} = req.params;
    const allPokemons = await getAllPokemons();

    if(id) {
        let pokemonId = await allPokemons.filter(e => e.id == id);

        pokemonId.length
        ? res.status(200).json(pokemonId)
        : res.status(404).send("Pokemon ID Not Found");
    }
 
};


module.exports = {
  getPokemons,
  addPokemon,
  getPokemonById, 
};