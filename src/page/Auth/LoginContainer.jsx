// eslint-disable-next-line no-unused-vars
import React from 'react';

import { connect } from 'react-redux';

import { authLoginAC } from '../../redux/auth-reducer';
import Login from './Login';

const mapStateToProps = ({ authPage }) => ({ login: authPage.login });

const mapDispatchToProps = (dispatch) => {
  return {
    loginAuth: () => {
      dispatch(authLoginAC());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
