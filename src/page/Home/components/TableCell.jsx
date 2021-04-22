import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({
  editMode,
  val,
  updateText
}) => {
  return (
    <td className="table__td">
      {!editMode ? (val)
        : (
          <textarea
            type="text"
            placeholder="text"
            value={val}
            onChange={(e) => {
              updateText(e.target.value);
            }}
          />
        )}

    </td>
  );
};

TableCell.defaultProps = {
  editMode: false,
  val: '',
  updateText: () => {}
};
TableCell.propTypes = {
  editMode: PropTypes.bool,
  val: PropTypes.string,
  updateText: PropTypes.func
};

export default TableCell;
