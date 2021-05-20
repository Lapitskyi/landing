import React from 'react';
import PropTypes from 'prop-types';
import '../scss/SearchPokemon.scss';

const SearchPokemon = ({
  val,
  onChange
}) => {
  return (
    <div className="search">
      <form className="form">
        <label className="form__label" htmlFor="search">
          <input
            className="form__input"
            type="text"
            name="search"
            placeholder="pokemon-search"
            value={val}
            onChange={onChange}
          />
        </label>
      </form>
      <span className="search__text">Try name pikachu, clefable or number</span>

    </div>
  );
};

SearchPokemon.defaultProps = {
  val: '',
  onChange: () => {
  }
};
SearchPokemon.propTypes = {
  val: PropTypes.string,
  onChange: PropTypes.func
};
export default SearchPokemon;
