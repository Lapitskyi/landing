import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../components/Pagination/Pagination';
import './scss/PokemonGroup.scss';
import pokemonBol from '../../assets/images/pokemonBol.svg';
import SearchPokemon from './components/SearchPokemon';
import PokemonModal from './components/PokemonModal';

const PokemonGroup = ({
  pokemonGroup,
  pageSize,
  totalCount,
  currentPage,
  pokemon,
  modal,
  setModal,
  showPokemon,
  onPageChanged
}) => (
  <div className="pokemonGroup">
    <SearchPokemon />
    <ul className="pokemonGroup__list">
      {pokemonGroup.map((pokemonsItem) => (
        <li
          className="pokemonGroup__list-item"
          onClick={() => {
            setModal(true);
            showPokemon(pokemonsItem.name);
          }}
          role="presentation"
          key={pokemonsItem.name}
        >
          <div className="pokemonGroup__list-photo">
            <img
              className="pokemonGroup__list-img"
              src={pokemonsItem.img ? pokemonsItem.img : pokemonBol}
              alt="PokemonModal"
            />
          </div>
          <h3 className="pokemonGroup__list-title">{pokemonsItem.name}</h3>
        </li>
      ))}

    </ul>
    <PokemonModal
      modal={modal}
      setModal={setModal}
      pokemon={pokemon}
    />

    <Pagination
      pageSize={pageSize}
      totalCount={totalCount}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
    />

  </div>

);

export default PokemonGroup;

PokemonGroup.defaultProps = {
  pokemonGroup: [],
  pokemon: {},
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  modal: false,
  setModal: () => {
  },
  showPokemon: () => {
  },
  onPageChanged: () => {
  },
};
PokemonGroup.propTypes = {
  pokemonGroup: PropTypes.arrayOf(PropTypes.object),
  pokemon: PropTypes.shape({}),
  pageSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  showPokemon: PropTypes.func,
  onPageChanged: PropTypes.func,
};
