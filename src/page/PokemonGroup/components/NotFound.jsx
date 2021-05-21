import React from 'react';
import pokemonBol from '../../../assets/images/pokemonBol.svg';

import '../scss/NotFound.scss';

const NotFound = () => (

  <div className="notfound__inner">
    <div className="notfound__title">Pokemon notfound</div>
    <img className="notfound__img" src={pokemonBol} alt="pokemon notfound" />
  </div>
);

export default NotFound;
