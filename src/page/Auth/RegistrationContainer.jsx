import React from 'react';
import PropTypes from 'prop-types';
import Registration from './Registration';
import withHoc from '../../hoc/withHoc';

const RegistrationContainer = ({
  stateApp: {
    auth: {
      registration: {
        input,
        btnText,
        link
      }
    }
  }
}) => {
  return (
    <Registration input={input} btnText={btnText} link={link} />
  );
};
RegistrationContainer.defaultProps = {
  stateApp: {
    auth: {
      registration: {
        input: [],
        btnText: '',
        link: []
      }
    }
  }
};
RegistrationContainer.propTypes = {
  stateApp: PropTypes.shape({
    auth: PropTypes.shape({
      registration: PropTypes.shape({
        input: PropTypes.arrayOf(PropTypes.object),
        btnText: PropTypes.string,
        link: PropTypes.arrayOf(PropTypes.object)
      })
    })
  })
};

export default withHoc(RegistrationContainer);
