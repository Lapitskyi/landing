import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import withHoc from '../../hoc/withHoc';

const LoginContainer = ({
  stateApp: {
    auth: {
      login: {
        input,
        btnText,
        link
      }
    }
  }
}) => {
  return (
    <Login input={input} btnText={btnText} link={link} />
  );
};

LoginContainer.defaultProps = {
  stateApp: {
    auth: {
      login: {
        input: [],
        btnText: '',
        link: []
      }
    }
  }
};
LoginContainer.propTypes = {
  stateApp: PropTypes.shape({
    auth: PropTypes.shape({
      login: PropTypes.shape({
        input: PropTypes.arrayOf(PropTypes.object),
        btnText: PropTypes.string,
        link: PropTypes.arrayOf(PropTypes.object)
      })
    })
  })
};
export default withHoc(LoginContainer);
