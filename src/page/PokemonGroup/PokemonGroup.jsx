import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../components/Pagination/Pagination';
import SearchPokemon from './components/SearchPokemon';
import PokemonModal from './components/PokemonModal';
import PokemonList from './components/PokemonList';
import Preloader from '../../components/Preloader/Preloader';
import './scss/PokemonGroup.scss';
import NotFound from './components/NotFound';

const PokemonGroup = React.memo(({
  pokemonGroup,
  pageSize,
  totalCount,
  currentPage,
  pokemon,
  modal,
  setModal,
  showPokemon,
  onPageChanged,
  isLoader,
  val,
  onChange
}) => (
  <div className="pokemonGroup">
    <SearchPokemon
      val={val}
      onChange={onChange}
    />
    <>
      {(isLoader ? <Preloader /> : null)
      || (pokemonGroup === 1 && <NotFound />)
      || (
        <>
          <ul className="pokemonGroup__list">
            {pokemonGroup.map((pokemonItem) => (
              <PokemonList
                setModal={setModal}
                showPokemon={showPokemon}
                key={pokemonItem.name}
                name={pokemonItem.name}
                img={pokemonItem.img}
              />
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
        </>
      )}
    </>
  </div>

));

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
  isLoader: false,
  val: '',
  onChange: () => {
  }
};
PokemonGroup.propTypes = {
  isLoader: PropTypes.bool,
  pokemonGroup: PropTypes.arrayOf(PropTypes.object),
  pokemon: PropTypes.shape({}),
  pageSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  showPokemon: PropTypes.func,
  onPageChanged: PropTypes.func,
  val: PropTypes.string,
  onChange: PropTypes.func
};
