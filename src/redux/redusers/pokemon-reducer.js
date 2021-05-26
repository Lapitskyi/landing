import pokemonApi from '../../service/pokemonApi';

const ERROR_POKEMON = 'ERROR_POKEMON';
const SEARCH_POKEMON = 'SEARCH_POKEMON';

const SET_POKEMONS_GROUP = 'SET_POKEMONS_GROUP';
const SET_POKEMON_TOTAL_COUNT = 'SET_POKEMON_TOTAL_COUNT';
const SET_POKEMON = 'SET_POKEMON';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const TOGGLE_IS_LOADER = 'TOGGLE_IS_LOADER';

const initialState = {
  pokemonGroup: [],
  pokemon: {},
  isLoader: false,
  pageSize: 40,
  totalCount: 0,
  currentPage: 1,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS_GROUP:
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
        pokemonGroup: [{ name: action.pokemon.name, url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
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

export const setPokemonsGroup = (pokemonGroup) => ({
  type: SET_POKEMONS_GROUP,
  pokemonGroup
});
export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  pokemon
});
export const searchPokemon = (pokemon) => ({
  type: SEARCH_POKEMON,
  pokemon
});
export const errorPokemon = (errPokemon) => ({
  type: ERROR_POKEMON,
  errPokemon
});
export const toggleIsLoader = (isLoader) => ({
  type: TOGGLE_IS_LOADER,
  isLoader
});
export const setPokemonTotalCount = (totalCount) => ({
  type: SET_POKEMON_TOTAL_COUNT,
  totalCount
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const getPokemonGroups = () => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const data = await pokemonApi.getPokemonGroup();   
  dispatch(toggleIsLoader(false));
  dispatch(setPokemonsGroup(data.results));
  dispatch(setPokemonTotalCount(data.count));
};

export const getCurrentPage = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const data = await pokemonApi.getCurrentPage(pageNumber, pageSize);  
  dispatch(toggleIsLoader(false));
  dispatch(setPokemonsGroup(data.results));
};

export const getPokemon = (pokemon) => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const data = await pokemonApi.getPokemon(pokemon);
  dispatch(toggleIsLoader(false));
  dispatch(setPokemon(data));
};

export const getSearch = (pokemon) => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const data = await pokemonApi.getSearchPokemon(pokemon);
  dispatch(toggleIsLoader(false));
  dispatch(searchPokemon(data));
};

export default pokemonReducer;
