import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import withHoc from '../../hoc/withHoc';

const LoginContainer = ({
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
    <Login input={input} btnText={btnText} link={link} />
  );
};

LoginContainer.defaultProps = {
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
LoginContainer.propTypes = {
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
export default withHoc(LoginContainer);
