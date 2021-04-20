import React from 'react';

import AuthLinks from './components/AuthLinks';
import ButtonClose from '../../components/ButtonClose/ButtonClose';
import './scss/Auth.scss';
import AuthForm from './components/AuthForm';

const Login = () => {
  const authLogin = {
    input: [
      {
        id: 'email',
        label: 'Username or email',
        type: 'text',
        placeholder: 'email'
      },
      {
        id: 'password',
        label: 'Password',
        type: 'text',
        placeholder: 'password'
      }
    ],
    btnText: 'Sing in',
    link: [
      {
        id: 1,
        title: 'Forgot your password?',
        path: '/reset'
      },
      {
        id: 2,
        title: 'Don\'t have an account yet? Register now',
        path: '/registration'
      }
    ]
  };

  return (
    <div className="login">
      <div className="auth__inner">

        <ButtonClose />

        <h2 className="auth__title">Sing in</h2>

        <AuthForm auth={authLogin} />

        <AuthLinks auth={authLogin} />

      </div>
    </div>
  );
};

export default Login;
