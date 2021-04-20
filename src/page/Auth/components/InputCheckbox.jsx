import React from 'react';
import '../scss/InputCheckbox.scss';

const InputCheckbox = () => {
  return (
    <label className="form__label-checkbox">
      <input className="form__checkbox" type="checkbox" />
      <span className="form__check-style" />
      {' '}
      Remember me
    </label>
  );
};

export default InputCheckbox;
