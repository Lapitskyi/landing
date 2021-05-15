import React from 'react';
import PropTypes from 'prop-types';

const TableCheckbox = ({
  id,
  done,
  onCheckedChange
}) => (
  <td className="table__td">
    <input
      type="checkbox"
      checked={done}
      onChange={() => {
        onCheckedChange(id);
      }}
    />
    {id}
  </td>
);

TableCheckbox.defaultProps = {
  id: 1,
  done: false,
  onCheckedChange: () => {
  }
};
TableCheckbox.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool,
  onCheckedChange: PropTypes.func
};

export default TableCheckbox;
