import React from 'react';

import './scss/ButtonClose.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

const ButtonClose = () => {
  const onButtonClose = () => {
  };

  return (
    <button className="btn__close btn" type="button" onClick={onButtonClose}>
      <svg className="btn__close-icon">
        <use href={`${sprite}#close`} />
      </svg>
    </button>
  );
};

export default ButtonClose;
