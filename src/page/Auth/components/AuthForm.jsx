import React from 'react';
import PropTypes from 'prop-types';

import '../scss/AuthForm.scss';

const AuthForm = ({
  auth: {
    input,
    btnText
  }
}) => {
  const onInputText = () => {
  };

  return (
    <form className="form">
      {input.map((item) => (
        <label className="form__label" key={item.id} htmlFor={item.id}>
          {item.label}
          <input
            id={item.id}
            className="form__input"
            type={item.type}
            placeholder={item.placeholder}
            onChange={onInputText}
            value=""
          />
        </label>
      ))}
      <button
        className="form__btn btn"
        type="submit"
      >
        {btnText}
      </button>
    </form>
  );
};

AuthForm.defaultProps = {
  auth: {},
  input: [],
  btnText: ''
};

AuthForm.propTypes = {
  auth: PropTypes.objectOf,
  input: PropTypes.arrayOf,
  btnText: PropTypes.string
};

export default AuthForm;
