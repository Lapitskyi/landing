import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PokemonGroup from './PokemonGroup';
import {
  requestCurrentPage, requestPokemon, requestPokemonGroups, requestSearch, setCurrentPage
} from '../../redux/actions';
import useInput from '../../useHook/useInput';
import useDebounce from '../../useHook/useDebounce';
import {
  getGroupPokemon,
  getLoader,
  getPageCurrent,
  getPageSize,
  getPokemonItem,
  getTotalCountPokemon
} from '../../redux/selector';

const PokemonGroupContainer = ({
  pokemonGroup,
  pageSize,
  portionSize,
  totalCount,
  currentPage,
  pokemon,
  isLoader,
  ...props
}) => {
  const [modal, setModal] = useState(false);
  const {
    val,
    onChange
  } = useInput('');
  const debouncedSearchTerm = useDebounce(val, 500);

  const showPokemon = (name) => {
    props.requestPokemon(name);
  };

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.requestCurrentPage(pageNumber, pageSize);
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        props.requestSearch(val);
      }
      if (debouncedSearchTerm === '' || !pokemonGroup) {
        props.requestPokemonGroups(currentPage, pageSize);
      }
    }, [debouncedSearchTerm, currentPage, pageSize]
  );

  return (

    <PokemonGroup
      isLoader={isLoader}
      modal={modal}
      setModal={setModal}
      pokemonGroup={pokemonGroup}
      pokemon={pokemon}
      pageSize={pageSize}
      portionSize={portionSize}
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
  pokemonGroup: getGroupPokemon(pokemonPage),
  pokemon: getPokemonItem(pokemonPage),
  pageSize: getPageSize(pokemonPage),
  portionSize: getPageSize(pokemonPage),
  totalCount: getTotalCountPokemon(pokemonPage),
  currentPage: getPageCurrent(pokemonPage),
  isLoader: getLoader(pokemonPage)
});

export default compose(
  connect(mapStateToProps,
    {
      requestPokemonGroups,
      requestPokemon,
      setCurrentPage,
      requestCurrentPage,
      requestSearch
    })
)(PokemonGroupContainer);

PokemonGroupContainer.defaultProps = {
  pokemonGroup: [],
  pageSize: 5,
  portionSize: 10,
  totalCount: 0,
  currentPage: 1,
  isLoader: false,
  pokemon: {},
  requestPokemonGroups: () => {
  },
  requestPokemon: () => {
  },
  requestCurrentPage: () => {
  },
  setCurrentPage: () => {
  },
  val: '',
  onChange: () => {
  },
  requestSearch: () => {
  }
};
PokemonGroupContainer.propTypes = {
  pokemonGroup: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  portionSize: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pokemon: PropTypes.shape({}),
  setCurrentPage: PropTypes.func,
  isLoader: PropTypes.bool,
  val: PropTypes.string,
  onChange: PropTypes.func,
  requestSearch: PropTypes.func,
  requestPokemonGroups: PropTypes.func,
  requestPokemon: PropTypes.func,
  requestCurrentPage: PropTypes.func,
};
