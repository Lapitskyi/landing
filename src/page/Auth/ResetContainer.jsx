import React from 'react';
import PropTypes from 'prop-types';
import Reset from './Reset';
import withHoc from '../../hoc/withHoc';

const ResetContainer = ({
  stateApp: {
    auth: {
      reset: {
        input,
        btnText,
        link
      }
    }
  }
}) => {
  return (
    <Reset input={input} btnText={btnText} link={link} />
  );
};

ResetContainer.defaultProps = {
  stateApp: {
    auth: {
      reset: {
        input: [],
        btnText: '',
        link: []
      }
    }
  }
};
ResetContainer.propTypes = {
  stateApp: PropTypes.shape({
    auth: PropTypes.shape({
      reset: PropTypes.shape({
        input: PropTypes.arrayOf(PropTypes.object),
        btnText: PropTypes.string,
        link: PropTypes.arrayOf(PropTypes.object)
      })
    })
  })
};
export default withHoc(ResetContainer);
