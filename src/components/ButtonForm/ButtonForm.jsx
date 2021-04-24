import React from 'react';
import PropTypes from 'prop-types';
import './ButtonForm.scss';

const ButtonForm = ({ name }) => {
  return (
    <button className="button__form" type="submit">
      {name}
    </button>
  );
};

ButtonForm.defaultProps = {
  name: 'click'
};
ButtonForm.propTypes = {
  name: PropTypes.string
};

export default ButtonForm;
