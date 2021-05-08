import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import withHoc from '../../hoc/withHoc';
import Login from './Login';
import Registration from './Registration';
import Reset from './Reset';

const AuthContainer = ({
  stateApp: {
    langT,
    auth: {
      login,
      registration,
      reset
    }
  }
}) => {
  const a = langT.filter((item) => item.lang === true);
  return (
    <Switch>
      <Route exact path="/auth/login" render={() => <Login login={login[`${a[0].id}`]} />} />
      <Route path="/auth/registration" render={() => <Registration registration={registration[`${a[0].id}`]} />} />
      <Route path="/auth/reset" render={() => <Reset reset={reset[`${a[0].id}`]} />} />
      <Redirect to="/" />
    </Switch>
  );
};
AuthContainer.defaultProps = {
  stateApp: {
    langT: {},
    auth: {
      login: {},
      registration: {},
      reset: {}
    }
  }
};

AuthContainer.propTypes = {
  stateApp: PropTypes.shape({
    langT: PropTypes.arrayOf(PropTypes.object),
    auth: PropTypes.shape({
      login: PropTypes.objectOf(PropTypes.object),
      registration: PropTypes.objectOf(PropTypes.object),
      reset: PropTypes.objectOf(PropTypes.object)
    })
  })
};

export default withHoc(AuthContainer);
