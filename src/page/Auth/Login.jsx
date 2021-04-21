import React from 'react';
import PropTypes from 'prop-types';
import AuthLinks from './components/AuthLinks';
import ButtonClose from '../../components/ButtonClose/ButtonClose';
import AuthForm from './components/AuthForm';
import './scss/Auth.scss';

const Login = ({
  storeT: {
    state: {
      auth: {
        login: {
          input,
          btnText,
          link
        }
      }
    }
  }
}) => {
  return (
    <div className="login">
      <div className="auth__inner">
        <ButtonClose />
        <h2 className="auth__title">Sing in</h2>
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

Login.defaultProps = {
  storeT: {
    state: {
      auth: {
        login: {
          input: [],
          btnText: '',
          link: []
        }
      }
    }
  }
};
Login.propTypes = {
  storeT: PropTypes.shape({
    state: PropTypes.shape({
      auth: PropTypes.shape({
        login: PropTypes.shape({
          input: PropTypes.arrayOf(PropTypes.object),
          btnText: PropTypes.string,
          link: PropTypes.arrayOf(PropTypes.object)
        })
      })
    })
  })
};
export default Login;
