import {
  ERROR_POKEMON,
  SEARCH_POKEMON,
  SET_POKEMON_GROUP,
  SET_POKEMON_TOTAL_COUNT,
  SET_POKEMON,
  SET_CURRENT_PAGE,
  TOGGLE_IS_LOADER
} from '../type';

const initialState = {
  pokemonGroup: null,
  pokemon: {},
  isLoader: false,
  pageSize: 20,
  totalCount: 0,
  currentPage: 1,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_GROUP:
      return {
        ...state,
        pokemonGroup: action.pokemonGroup
      };

    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.pokemon
      };

    case SET_POKEMON_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    case SEARCH_POKEMON:
      return {
        ...state,
        pokemonGroup: [{
          name: action.pokemon.name,
          url: 'https://pokeapi.co/api/v2/pokemon/1/'
        }],
      };

    case ERROR_POKEMON:
      return {
        ...state,
        pokemonGroup: action.errPokemon,
      };

    case TOGGLE_IS_LOADER:
      return {
        ...state,
        isLoader: action.isLoader
      };

    default:
      return state;
  }
};

export default pokemonReducer;
