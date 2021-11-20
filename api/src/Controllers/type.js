require("dotenv").config();
const { Type } = require('../db.js');
const axios = require ('axios');


async function getAllTypes (req, res) {
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/type");
  const apiInfo = await apiUrl.data.results.map( e => e.name);

  const types = apiInfo.flat();
  
  types.forEach((e) => {
    Type.findOrCreate({
      where: {
        name: e,
      },
    });
  });

  const allTypes = await Type.findAll();
  if(allTypes.length){
    res.status(200).send(allTypes);
  }else{
    res.status(404).send('Type Not Found')
  }
};



module.exports = {
  getAllTypes,
};