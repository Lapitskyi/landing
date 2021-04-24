import React from 'react';
import PropTypes from 'prop-types';
import Reset from './Reset';
import withHoc from '../../hoc/withHoc';

const ResetContainer = ({
  storeT: {
    state: {
      auth: {
        reset: {
          input,
          btnText,
          link
        }
      }
    }
  }
}) => {
  return (
    <Reset input={input} btnText={btnText} link={link} />
  );
};

ResetContainer.defaultProps = {
  storeT: {
    state: {
      auth: {
        reset: {
          input: [],
          btnText: '',
          link: []
        }
      }
    }
  }
};
ResetContainer.propTypes = {
  storeT: PropTypes.shape({
    state: PropTypes.shape({
      auth: PropTypes.shape({
        reset: PropTypes.shape({
          input: PropTypes.arrayOf(PropTypes.object),
          btnText: PropTypes.string,
          link: PropTypes.arrayOf(PropTypes.object)
        })
      })
    })
  })
};
export default withHoc(ResetContainer);
