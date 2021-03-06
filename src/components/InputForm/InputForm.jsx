import React from 'react';
import './ImputForm.scss';
import PropTypes from 'prop-types';

const InputForm = ({
  id, label, type, placeholder, onChange, val
}) => {
  return (
    <label key={id} htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={val}
      />
    </label>
  );
};
InputForm.defaultProps = {
  id: 1,
  label: 'text',
  type: 'text',
  placeholder: 'text',
  val: 'text',
  onChange: () => {}
};

InputForm.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  val: PropTypes.string
};
export default InputForm;
