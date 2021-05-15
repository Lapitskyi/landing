import React from 'react';
import '../scss/InputCheckbox.scss';

const InputCheckbox = () => (
  <label className="form__label-checkbox" htmlFor="form__checkbox">
    <input className="form__checkbox" type="checkbox" id="form__checkbox" />
    <span className="form__check-style" />
    {' '}
    Remember me
  </label>
);

export default InputCheckbox;
