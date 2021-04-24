import React from 'react';
import PropTypes from 'prop-types';
import Registration from './Registration';
import withHoc from '../../hoc/withHoc';

const RegistrationContainer = ({
  storeT: {
    state: {
      auth: {
        registration: {
          input,
          btnText,
          link
        }
      }
    }
  }
}) => {
  return (
    <Registration input={input} btnText={btnText} link={link} />
  );
};
RegistrationContainer.defaultProps = {
  storeT: {
    state: {
      auth: {
        registration: {
          input: [],
          btnText: '',
          link: []
        }
      }
    }
  }
};
RegistrationContainer.propTypes = {
  storeT: PropTypes.shape({
    state: PropTypes.shape({
      auth: PropTypes.shape({
        registration: PropTypes.shape({
          input: PropTypes.arrayOf(PropTypes.object),
          btnText: PropTypes.string,
          link: PropTypes.arrayOf(PropTypes.object)
        })
      })
    })
  })
};

export default withHoc(RegistrationContainer);
