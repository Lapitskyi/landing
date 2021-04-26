import React from 'react';
import PropTypes from 'prop-types';

import AuthForm from './components/AuthForm';
import ButtonClose from '../../components/ButtonClose/ButtonClose';
import AuthLinks from './components/AuthLinks';

import './scss/Auth.scss';

const Reset = ({
  reset: {
    input,
    btnText,
    link
  }
}) => {
  return (
    <div className="reset">
      <div className="auth__inner">

        <ButtonClose />

        <h2 className="auth__title">Reset password</h2>

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
Reset.defaultProps = {
  reset: {
    input: [],
    btnText: '',
    link: []
  }

};
Reset.propTypes = {
  reset: PropTypes.shape({
    input: PropTypes.arrayOf(PropTypes.object),
    btnText: PropTypes.string,
    link: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Reset;
