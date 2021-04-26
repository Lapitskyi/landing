import React from 'react';
import PropTypes from 'prop-types';
import Reset from './Reset';
import withHoc from '../../hoc/withHoc';

const ResetContainer = ({
  stateApp: {
    langT,
    auth: {
      reset
    }
  }
}) => {
  const a = langT.filter((item) => item.lang === true);
  return (
    <Reset reset={reset[`${a[0].id}`]} />
  );
};

ResetContainer.defaultProps = {
  stateApp: {
    langT: {},
    auth: {
      reset: {}
    }
  }
};
ResetContainer.propTypes = {
  stateApp: PropTypes.shape({
    langT: PropTypes.arrayOf(PropTypes.object),
    auth: PropTypes.shape({
      reset: PropTypes.objectOf(PropTypes.object)

    })
  })
};
export default withHoc(ResetContainer);
