import React from 'react';
import '../scss/SearchPokemon.scss';

const SearchPokemon = () => (
  <div className="search">
    <form className="form">
      <label className="form__label" htmlFor="search">
        <input
          className="form__input"
          type="text"
          name="search"
          placeholder="pokemon-search"
          // value=""
          // onChange=""
        />
      </label>
    </form>
    <span className="search__text">Try name pikachu, clefable or number</span>

  </div>
);

export default SearchPokemon;
