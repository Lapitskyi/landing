import React from 'react';
import PropTypes from 'prop-types';

import AuthForm from './components/AuthForm';
import ButtonClose from '../../components/ButtonClose/ButtonClose';
import AuthLinks from './components/AuthLinks';

import './scss/Auth.scss';

const Registration = ({
  registration: {
    input,
    btnText,
    link
  }
}) => {
  return (
    <div className="registration">
      <div className="auth__inner">

        <ButtonClose />

        <h2 className="auth__title">Sing Up</h2>

        <AuthForm auth={{
          input,
          btnText
        }}
        />

        <AuthLinks link={link} />
      </div>
    </div>
  );
};
Registration.defaultProps = {
  registration: PropTypes.shape({
    input: [],
    btnText: '',
    link: []
  })
};
Registration.propTypes = {
  registration: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.object),
    btnText: PropTypes.string,
    link: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Registration;
