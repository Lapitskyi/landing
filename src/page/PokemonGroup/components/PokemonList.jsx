import React from 'react';
import PropTypes from 'prop-types';
import pokemonBol from '../../../assets/images/pokemonBol.svg';
import '../scss/PokemonGroup.scss';

const PokemonList = ({
  showPokemon,
  setModal,
  name,
  img
}) => {
  return (
    <li
      className="pokemonGroup__list-item"
      onClick={() => {
        setModal(true);
        showPokemon(name);
      }}
      role="presentation"
      key={name}
    >
      <div className="pokemonGroup__list-photo">
        <img
          className="pokemonGroup__list-img"
          src={img || pokemonBol}
          alt="PokemonModal"
        />
      </div>
      <h3 className="pokemonGroup__list-title">{name}</h3>
    </li>
  );
};

PokemonList.defaultProps = {
  setModal: () => {
  },
  showPokemon: () => {
  },
  name: '',
  img: ''
};
PokemonList.propTypes = {
  setModal: PropTypes.func,
  showPokemon: PropTypes.func,
  name: PropTypes.string,
  img: PropTypes.string
};

export default PokemonList;
