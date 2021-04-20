import React from 'react';

import AuthForm from './components/AuthForm';
import ButtonClose from '../../components/ButtonClose/ButtonClose';
import AuthLinks from './components/AuthLinks';

import './scss/Auth.scss';

const Reset = () => {
  const authReset = {
    input: [
      {
        id: 'email',
        label: 'Email',
        placeholder: 'email',
        btn: 'Reset password'
      },
    ],
    btnText: 'Reset password',
    link: [
      {
        id: 1,
        title: 'Already have login and password? Sign in',
        path: '/login'
      }
    ]
  };
  return (
    <div className="reset">
      <div className="auth__inner">

        <ButtonClose />

        <h2 className="auth__title">Reset password</h2>

        <AuthForm auth={authReset} />

        <AuthLinks auth={authReset} />
      </div>
    </div>
  );
};

export default Reset;
