import React from 'react';
import PropTypes from 'prop-types';

import '../scss/AuthForm.scss';
import ButtonForm from '../../../components/ButtonForm/ButtonForm';

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

      <ButtonForm name={btnText} />

    </form>
  );
};

AuthForm.defaultProps = {
  auth: {
    input: [],
    btnText: ''
  },
};

AuthForm.propTypes = {
  auth: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.object),
    btnText: PropTypes.string
  })
};

export default AuthForm;
