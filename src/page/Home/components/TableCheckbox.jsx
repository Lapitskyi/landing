import React from 'react';
import PropTypes, { number } from 'prop-types';

const TableCheckbox = ({
  id,
  done,
  onCheckedChange
}) => {
  return (
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
};

TableCheckbox.defaultProps = {
  id: number,
  done: false,
  onCheckedChange: () => {}
};
TableCheckbox.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool,
  onCheckedChange: PropTypes.func
};

export default TableCheckbox;
