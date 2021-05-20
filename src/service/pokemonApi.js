import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  method: 'get',
});

const pokemonAPI = {
  getPokemonGroup(pageNumber, pageSize) {
    return instance(`?offset=${pageNumber}&limit=${pageSize}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.response);
        }
      });
  },
  getCurrentPage(pageNumber, pageSize) {
    return instance(`?offset=${pageNumber}&limit=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getPokemon(pokemon) {
    return instance(`${pokemon}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.response);
        }
      });
  },
  getSearchPokemon(pokemon) {
    return instance(`${pokemon}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.response);
        }
      });
  }
};

export default pokemonAPI;
