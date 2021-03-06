export const getGroupPokemon = (pokemonPage) => (
  pokemonPage.pokemonGroup
);

export const getPokemonItem = (pokemonPage) => (
  pokemonPage.pokemon
);
export const getPokemonArray = (pokemonPage) => (
  pokemonPage.pokemonArray
);

export const getPageCurrent = (pokemonPage) => (
  pokemonPage.currentPage
);

export const getPageSize = (pokemonPage) => (
  pokemonPage.pageSize
);

export const getPortionSize = (pokemonPage) => (
  pokemonPage.portionSize
);

export const getTotalCountPokemon = (pokemonPage) => (
  pokemonPage.totalCount
);

export const getLoader = (pokemonPage) => (
  pokemonPage.isLoader
);
