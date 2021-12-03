import {
    GET_POKEMONS,
    GET_TYPES,
    CREATE_POKEMON,
    GET_NAME_POKEMONS,
    GET_DETAILS,
    FILTER_BY_TYPE,
    FILTER_CREATED,
    ORDER_TYPE,
    SET_PAGE
  } from "./Actions.js";

const initialState = {
    pokemons: [],
    pokemon: {},
    pokemonsFilter: [],
    name: "",
    types: [],
    newPokemon: {},
    orderBy: "All",
    filterBy: "All",
    page:1
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case  GET_POKEMONS:
        return {
          ...state,
          pokemons: payload,
          pokemonsFilter: payload,
        };
      case GET_DETAILS:
        return {
          ...state,
          pokemon: payload,
        };
      case CREATE_POKEMON:
        return {
          ...state,
          newPokemon: payload,
        };
      case GET_NAME_POKEMONS:
        return {
          ...state,
          name: payload,
        };
      case GET_TYPES:
        return {
          ...state,
          types: payload,
        };
      case SET_PAGE:
        return{
          ...state,
          page: payload
        };
      case FILTER_CREATED:
        const poke = state.pokemons
        const createdFilter = poke.filter(e => e.createdInDb) 
        if (payload === "All") {
          return { ...state, pokemonsFilter: state.pokemons, filterBy: payload };
        }else if(payload === "DB"){
          return {...state, pokemonsFilter: createdFilter, filterBy: payload}
        };

        break

      case FILTER_BY_TYPE:
        if (payload === "All") {
          return { ...state, pokemonsFilter: state.pokemons, filterBy: payload };
        } else {
          return {
            ...state,
            pokemonsFilter: state.pokemons.filter((r) =>
              r.types?.includes(payload)
            ),
            filterBy: payload,
          };
        };
      case ORDER_TYPE:
        switch (payload) {
          case "LowToHigh":
            return {
              ...state,
              pokemonsFilter: [
                ...state.pokemonsFilter.sort((a, b) =>
                  a.attack > b.attack ? 1 : b.attack > a.attack ? -1 : 0
                ),
              ],
              orderBy: payload,
            };
          case "HighToLow":
            return {
              ...state,
              pokemonsFilter: [
                ...state.pokemonsFilter.sort((a, b) =>
                  a.attack < b.attack ? 1 : b.attack < a.attack ? -1 : 0
                ),
              ],
              orderBy: payload,
            };
          case "A-Z":
            return {
              ...state,
              pokemonsFilter: [
                ...state.pokemonsFilter.sort((a, b) =>
                  a.name.toLowerCase() > b.name.toLowerCase()
                    ? 1
                    : b.name.toLowerCase() > a.name.toLowerCase()
                    ? -1
                    : 0
                ),
              ],
              orderBy: payload,
            };
          case "Z-A":
            return {
              ...state,
              pokemonsFilter: [
                ...state.pokemonsFilter.sort((a, b) =>
                  a.name.toLowerCase() < b.name.toLowerCase()
                    ? 1
                    : b.name.toLowerCase() < a.name.toLowerCase()
                    ? -1
                    : 0
                ),
              ],
              orderBy: payload,
            };
          case "All":
            return { ...state, pokemonsFilter: state.name, orderBy: payload };
          default:
            return state;
        }
      default:
        return state;
    }
  }


