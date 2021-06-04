import {
  ERROR_POKEMON,
  SEARCH_POKEMON,
  SET_POKEMON_GROUP,
  SET_POKEMON_TOTAL_COUNT,
  SET_POKEMON,
  SET_CURRENT_PAGE,
  TOGGLE_IS_LOADER,
  SET_SHOW_POKEMON
} from '../type';

const initialState = {
  pokemonGroup: undefined,
  pokemon: undefined,
  pokemonArray: [],
  isLoader: false,
  pageSize: 20,
  portionSize: 10,
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
        pokemon: action.pokemon,
        pokemonArray: [...state.pokemonArray, {
          id: action.pokemon.name,
          pokemonItem: action.pokemon
        }],
        pokemonGroup: state.pokemonGroup.map((item) => {
          if (item.name === action.pokemon.name) {
            return {
              ...item,
              img: action.pokemon.sprites.other['official-artwork'].front_default
            };
          }
          return item;
        })

      };
    case SET_SHOW_POKEMON:
      return {
        ...state,
        pokemon: action.pokemon.pokemonItem
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
        totalCount: 1

      };

    case ERROR_POKEMON:
      return {
        ...state,
        pokemonGroup: action.errPokemon,
        totalCount: 0
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
