import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Table.scss';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import TableCheckbox from './TableCheckbox';
import sprite from '../../../assets/spriteSvg/sprite.svg';

const Table = ({
  tableHeadlines,
  onSort,
  tableItem,
  activateEditMode,
  dragStartItem,
  dragEndLeaveItem,
  dragOverItem,
  dropItem,
  onCheckedChange,
  editMode,
  updateFullName,
  updateInfo,
  deleteItemTable,
  addTable
}) => (
  <div className="inner">
    <table className="table">
      <thead>
        <TableHeader
          tableHeadlines={tableHeadlines}
          onSort={onSort}
        />
      </thead>
      <tbody>
        {
        tableItem.map((item) => (
          <tr
            className={item.dragAndDrop === true ? 'drag' : 'table__tr'}
            key={item.id}
            onDoubleClick={activateEditMode}
            draggable
            onDragStart={(e) => dragStartItem(e, item)}
            onDragLeave={(e) => dragEndLeaveItem(e)}
            onDragEnd={(e) => dragEndLeaveItem(e)}
            onDragOver={(e) => dragOverItem(e, item)}
            onDrop={(e) => dropItem(e, item)}
          >
            <TableCheckbox
              onCheckedChange={onCheckedChange}
              done={item.done}
              id={item.id}
            />

            <TableCell
              editMode={editMode}
              val={item.fullName}
              id={item.id}
              updateText={(newText) => updateFullName(item.id, newText)}
            />
            {item.info.map((info) => (
              <TableCell
                editMode={editMode}
                key={info.id}
                id={info.id}
                val={info.text}
                updateText={(newText) => updateInfo(item.id, info.id, newText)}
              />
            ))}
          </tr>
        ))
      }
      </tbody>
    </table>

    <div className="table__btn-box">
      <button
        type="button"
        className="table__btn"
        onClick={addTable}
      >
        <svg className="table__btn-icon">
          <use href={`${sprite}#addTable`} />
        </svg>
      </button>
      <button
        type="button"
        className="table__btn"
        onClick={(e) => deleteItemTable(e)}
      >
        <svg className="table__btn-icon">
          <use href={`${sprite}#deleteTable`} />
        </svg>
      </button>
    </div>
  </div>
);

Table.defaultProps = {
  tableHeadlines: [],
  tableItem: [],
  editMode: false,

  onSort: () => {
  },
  activateEditMode: () => {
  },
  dragStartItem: () => {
  },
  dragEndLeaveItem: () => {
  },
  dragOverItem: () => {
  },
  dropItem: () => {
  },
  onCheckedChange: () => {
  },
  updateFullName: () => {
  },
  updateInfo: () => {
  },
  deleteItemTable: () => {
  },
  addTable: () => {
  }
};
Table.propTypes = {
  tableHeadlines: PropTypes.arrayOf(PropTypes.object),
  tableItem: PropTypes.arrayOf(PropTypes.object),
  editMode: PropTypes.bool,

  onSort: PropTypes.func,
  activateEditMode: PropTypes.func,
  dragStartItem: PropTypes.func,
  dragEndLeaveItem: PropTypes.func,
  dragOverItem: PropTypes.func,
  dropItem: PropTypes.func,
  onCheckedChange: PropTypes.func,
  updateFullName: PropTypes.func,
  updateInfo: PropTypes.func,
  deleteItemTable: PropTypes.func,
  addTable: PropTypes.func
};

export default Table;
