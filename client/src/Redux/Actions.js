import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_NAME_POKEMONS = "GET_NAME_POKEMONS";
export const GET_DETAILS = "GET_DETAILS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_TYPE = "ORDER_TYPE";




export function getPokemons({name}) {
    return async function(dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/Pokemon?name=${name ? name : ""}`)
            return dispatch({
                type: 'GET_POKEMONS',
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    };
}

export function getTypes() {
    return async function(dispatch) {
        try {
            const info = await axios.get("http://localhost:3001/Type")
            return dispatch({ 
                type: 'GET_TYPES', 
                payload: info.data
            });
        } catch (error) {
            console.log(error)
        }
    };
}

export function postPokemon(pokemon) {
    return (dispatch) => {
        axios
          .post("http://localhost:3001/Pokemon/add", pokemon)
          .then((response) => {
            return dispatch({
              type: 'CREATE_POKEMON,',
              payload: response.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };

}

export function getNamePokemons(name) {
    return {
        type: 'GET_NAME_POKEMONS',
        payload: name,
      };
}


export function getDetail(id) {
    return async function(dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/Pokemon/${id}`);
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export function filterPokemonsByType(data) {
    return (dispatch) => {
        return dispatch({ type: FILTER_BY_TYPE, payload: data });
      };
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export const OrderType = (data) => {
    return (dispatch) => {
      return dispatch({ type: ORDER_TYPE, payload: data });
    };
  };