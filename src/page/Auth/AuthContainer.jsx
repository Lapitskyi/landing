import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import withHoc from '../../hoc/withHoc';
import Login from './Login';
import Registration from './Registration';
import Reset from './Reset';

const AuthContainer = ({
  stateApp: {
    auth: {
      login,
      registration,
      reset
    }
  }
}) => {
  const { t } = useTranslation();
  return (
    <Switch>
      <Route exact path="/auth/login" render={() => <Login login={login} t={t} />} />
      <Route path="/auth/registration" render={() => <Registration registration={registration} t={t} />} />
      <Route path="/auth/reset" render={() => <Reset reset={reset} t={t} />} />
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
      login: PropTypes.PropTypes.shape({
        input: PropTypes.arrayOf(PropTypes.object)
      }),
      registration: PropTypes.PropTypes.shape({
        input: PropTypes.arrayOf(PropTypes.object)
      }),
      reset: PropTypes.PropTypes.shape({
        input: PropTypes.arrayOf(PropTypes.object)
      }),
    })
  })
};

export default withHoc(AuthContainer);
