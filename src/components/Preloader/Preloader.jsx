import React from 'react';
import preloader from '../../assets/images/pokemon.gif';

const Preloader = () => (
  <div className="preloader">
    <img className="preloader__img" src={preloader} alt="preloader" />
  </div>
);

export default Preloader;
