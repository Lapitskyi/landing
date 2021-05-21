import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PokemonGroup from './PokemonGroup';
import {
  getCurrentPage, getPokemon, getPokemonGroups, getSearch, setCurrentPage
} from '../../redux/redusers/pokemon-reducer';
import useInput from '../../useHook/useInput';
import useDebounce from '../../useHook/useDebounce';

const PokemonGroupContainer = ({
  pokemonGroup,
  pageSize,
  totalCount,
  currentPage,
  pokemon,
  isLoader,
  ...props
}) => {
  const [modal, setModal] = useState(false);
  const { val, onChange } = useInput('');
  const debouncedSearchTerm = useDebounce(val, 500);

  const showPokemon = (name) => {
    props.getPokemon(name);
  };

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.getCurrentPage(pageNumber, pageSize);
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        props.getSearch(val);
      }
      if (debouncedSearchTerm === '') {
        props.getPokemonGroups();
      }
    }, [debouncedSearchTerm]
  );

  return (
    <PokemonGroup
      isLoader={isLoader}
      modal={modal}
      setModal={setModal}
      pokemonGroup={pokemonGroup}
      pokemon={pokemon}
      pageSize={pageSize}
      totalCount={totalCount}
      currentPage={currentPage}
      showPokemon={showPokemon}
      onPageChanged={onPageChanged}
      val={val}
      onChange={onChange}
    />
  );
};

const mapStateToProps = ({ pokemonPage }) => ({
  pokemonGroup: pokemonPage.pokemonGroup,
  pokemon: pokemonPage.pokemon,
  pageSize: pokemonPage.pageSize,
  totalCount: pokemonPage.totalCount,
  currentPage: pokemonPage.currentPage,
  isLoader: pokemonPage.isLoader
});

export default compose(
  connect(mapStateToProps,
    {
      getPokemonGroups,
      getPokemon,
      setCurrentPage,
      getCurrentPage,
      getSearch
    })
)(PokemonGroupContainer);

PokemonGroupContainer.defaultProps = {
  pokemonGroup: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isLoader: false,
  pokemon: {},
  getPokemonGroups: () => {
  },
  getPokemon: () => {
  },
  getCurrentPage: () => {
  },
  setCurrentPage: () => {
  },
  val: '',
  onChange: () => {
  },
  getSearch: () => {
  }
};
PokemonGroupContainer.propTypes = {
  pokemonGroup: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pokemon: PropTypes.shape({}),
  getPokemonGroups: PropTypes.func,
  getPokemon: PropTypes.func,
  setCurrentPage: PropTypes.func,
  getCurrentPage: PropTypes.func,
  isLoader: PropTypes.bool,
  val: PropTypes.string,
  onChange: PropTypes.func,
  getSearch: PropTypes.func
};
