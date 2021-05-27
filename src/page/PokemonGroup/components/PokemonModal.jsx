import React from 'react';
import PropTypes from 'prop-types';
import pokemonBol from '../../../assets/images/pokemonBol.svg';
import '../scss/PokemonModal.scss';
import Preloader from '../../../components/Preloader/Preloader';
import NotFound from './NotFound';

const PokemonModal = ({
  pokemon,
  modal,
  setModal,
  isLoader
}) => (
  <div
    className={modal ? 'modal active' : 'modal'}
    onClick={() => setModal(false)}
    role="presentation"
  >
    <div
      className={modal ? 'modal__inner active' : 'modal__inner'}
      onClick={(e) => e.stopPropagation()}
      role="presentation"
    >
      {(isLoader ? <Preloader /> : null)
      || (pokemon === null && <NotFound />)
      || (
        <>
          <div className="modal__photo">
            <img
              className="modal__img"
              src={pokemon?.sprites?.other['official-artwork'].front_default
                ? pokemon?.sprites?.other['official-artwork'].front_default : pokemonBol}
              alt="pokemon"
            />

          </div>
          <div
            className="modal__name"
          >
            {`${pokemon.name} ${pokemon.id}`}
          </div>
          <div className="modal__info">
            {' '}
            Struggle:
            {pokemon.base_experience}
          </div>
        </>
      )}
    </div>

  </div>
);

export default PokemonModal;
PokemonModal.defaultProps = {
  pokemon: {},
  modal: false,
  isLoader: false,
  setModal: () => {
  },
};
PokemonModal.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    base_experience: PropTypes.number,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        'official-artwork': PropTypes.shape({
          front_default: PropTypes.string
        })
      })
    }),
  }),
  modal: PropTypes.bool,
  isLoader: PropTypes.bool,
  setModal: PropTypes.func,

};
