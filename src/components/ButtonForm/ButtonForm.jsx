import React from 'react';
import PropTypes from 'prop-types';
import './ButtonForm.scss';

const ButtonForm = ({
  name,
  addDisabled,
  addOnClick
}) => (
  <button
    className="button__form-btn btn btn__size-medium btn--color"
    type="submit"
    disabled={addDisabled}
    onClick={addOnClick}
  >
    {name}
  </button>
);

ButtonForm.defaultProps = {
  name: 'click',
  addDisabled: true,
  addOnClick: () => {
  }
};
ButtonForm.propTypes = {
  name: PropTypes.string,
  addDisabled: PropTypes.bool,
  addOnClick: PropTypes.func
};

export default ButtonForm;
