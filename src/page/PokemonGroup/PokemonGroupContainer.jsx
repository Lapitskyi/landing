import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PokemonGroup from './PokemonGroup';
import {
  requestCurrentPage,
  requestPokemon,
  requestPokemonGroups,
  requestSearch,
  setCurrentPage,
  setPokemonsGroup,
  setShowPokemon
} from '../../redux/actions';
import useInput from '../../useHook/useInput';
import useDebounce from '../../useHook/useDebounce';
import {
  getGroupPokemon,
  getLoader,
  getPageCurrent,
  getPageSize,
  getPokemonArray,
  getPokemonItem, getPortionSize,
  getTotalCountPokemon
} from '../../redux/selector';

const PokemonGroupContainer = React.memo(({
  pokemonGroup,
  pokemonArray,
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
    const pokemonName = pokemonArray.find((item) => {
      if (item.id === name) {
        return { ...item };
      }
      return null;
    });
    if (pokemonName) {
      props.setShowPokemon(pokemonName);
    } else {
      props.requestPokemon(name);
    }
  };

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.requestCurrentPage(pageNumber, pageSize);
  };
  // useEffect(() => {
  //   props.requestPokemonGroups();
  // }, []);
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        props.requestSearch(val);
      }
      if (debouncedSearchTerm === '' || !pokemonGroup) {
        props.requestPokemonGroups();
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
      portionSize={portionSize}
      totalCount={totalCount}
      currentPage={currentPage}
      showPokemon={showPokemon}
      onPageChanged={onPageChanged}
      val={val}
      onChange={onChange}
    />
  );
});

const mapStateToProps = ({ pokemonPage }) => ({
  pokemonGroup: getGroupPokemon(pokemonPage),
  pokemon: getPokemonItem(pokemonPage),
  pokemonArray: getPokemonArray(pokemonPage),
  pageSize: getPageSize(pokemonPage),
  portionSize: getPortionSize(pokemonPage),
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
      requestSearch,
      setShowPokemon,
      setPokemonsGroup
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
  pokemonArray: [],
  requestPokemonGroups: () => {
  },
  setShowPokemon: () => {
  },
  requestPokemon: () => {
  },
  requestCurrentPage: () => {
  },
  setCurrentPage: () => {
  },
  setPokemonsGroup: () => {
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
  pokemonArray: PropTypes.arrayOf(PropTypes.object),
  setCurrentPage: PropTypes.func,
  isLoader: PropTypes.bool,
  val: PropTypes.string,
  onChange: PropTypes.func,
  requestSearch: PropTypes.func,
  requestPokemonGroups: PropTypes.func,
  requestPokemon: PropTypes.func,
  requestCurrentPage: PropTypes.func,
  setShowPokemon: PropTypes.func,
  setPokemonsGroup: PropTypes.func,
};
