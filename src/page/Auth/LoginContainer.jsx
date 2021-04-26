import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import withHoc from '../../hoc/withHoc';

const LoginContainer = ({
  stateApp: {
    langT,
    auth: {
      login
    }
  }
}) => {
  const a = langT.filter((item) => item.lang === true);
  return (
    <Login login={login[`${a[0].id}`]} />
  );
};

LoginContainer.defaultProps = {
  stateApp: {
    langT: {},
    auth: {
      login: {}
    }
  }
};
LoginContainer.propTypes = {
  stateApp: PropTypes.shape({
    langT: PropTypes.arrayOf(PropTypes.object),
    auth: PropTypes.shape({
      login: PropTypes.objectOf(PropTypes.object)

    })
  })
};
export default withHoc(LoginContainer);
