require("dotenv").config();
const { Type } = require('../db.js');
const axios = require ('axios');


async function getAllTypes (req, res) {
  const response = await axios.get("https://pokeapi.co/api/v2/type");
  const types = await response.data.results.map( e => e.name);
  const typesFlatten = types.flat();
  
  typesFlatten.forEach((e) => {
    Type.findOrCreate({
      where: {
        name: e,
      },
    });
  });

  const allTypes = await Type.findAll();

  if (allTypes.length) {
    return res.status(200).send(allTypes);
  }

  return res.status(404).send('Type Not Found')
};



module.exports = {
  getAllTypes,
};