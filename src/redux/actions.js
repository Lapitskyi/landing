import pokemonApi from '../service/pokemonApi';
import {
  ERROR_POKEMON,
  SEARCH_POKEMON,
  SET_POKEMON_GROUP,
  SET_POKEMON_TOTAL_COUNT,
  SET_POKEMON,
  SET_CURRENT_PAGE,
  TOGGLE_IS_LOADER
} from './type';

export const setPokemonsGroup = (pokemonGroup) => ({
  type: SET_POKEMON_GROUP,
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

export const requestPokemonGroups = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const {
    results,
    count
  } = await pokemonApi.getPokemonGroup(currentPage, pageSize);
  dispatch(toggleIsLoader(false));
  dispatch(setPokemonsGroup(results));
  dispatch(setPokemonTotalCount(count));
};

export const requestCurrentPage = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const { results } = await pokemonApi.getCurrentPage(pageNumber, pageSize);
  dispatch(toggleIsLoader(false));
  dispatch(setPokemonsGroup(results));
};

export const requestPokemon = (pokemon) => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const data = await pokemonApi.getPokemon(pokemon);
  dispatch(toggleIsLoader(false));
  dispatch(setPokemon(data));
};

export const requestSearch = (pokemon) => async (dispatch) => {
  dispatch(toggleIsLoader(true));
  const data = await pokemonApi.getSearchPokemon(pokemon);
  dispatch(toggleIsLoader(false));
  dispatch(searchPokemon(data));
};
