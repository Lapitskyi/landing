import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  method: 'get'
});

const pokemonAPI = {
  // eslint-disable-next-line no-unused-vars
  getPokemonGroup(currentPage, pageSize) {
    return instance({
      params: {
        offset: currentPage,
        limit: pageSize
      }
    })
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
    return instance({
      params: {
        offset: pageNumber,
        limit: pageSize
      }
    })
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
          return err.response.data;
        } if (err.request) {
          console.log(err.response);
        }
        return err;
      });
  }
};

export default pokemonAPI;
