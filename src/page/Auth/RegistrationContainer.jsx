import React from 'react';
import PropTypes from 'prop-types';
import Registration from './Registration';
import withHoc from '../../hoc/withHoc';

const RegistrationContainer = ({
  stateApp: {
    langT,
    auth: {
      registration
    }
  }
}) => {
  const a = langT.filter((item) => item.lang === true);
  return (
    <Registration registration={registration[`${a[0].id}`]} />
  );
};
RegistrationContainer.defaultProps = {
  stateApp: {
    langT: {},
    auth: {
      registration: {}
    }
  }
};
RegistrationContainer.propTypes = {
  stateApp: PropTypes.shape({
    langT: PropTypes.arrayOf(PropTypes.object),
    auth: PropTypes.shape({
      registration: PropTypes.objectOf(PropTypes.object)
    })
  })
};

export default withHoc(RegistrationContainer);
