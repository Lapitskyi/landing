import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import withHoc from '../../hoc/withHoc';
import Login from './Login';
import Registration from './Registration';
import Reset from './Reset';

const AuthContainer = () => {
  const { t } = useTranslation();
  const auth = (t('auth', { returnObjects: true }));
  return (
    <Switch>
      <Route exact path="/auth/login" render={() => <Login login={auth.login} />} />
      <Route path="/auth/registration" render={() => <Registration registration={auth.registration} />} />
      <Route path="/auth/reset" render={() => <Reset reset={auth.reset} />} />
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
