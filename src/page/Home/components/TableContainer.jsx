import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const TableContainer = ({
  state: {
    tableArray: {
      tableBody,
      tableHeadlines
    }
  }
}) => {
  const [tableItem, setTableItem] = useState(tableBody);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    setTableItem(tableBody);
  }, [tableBody]);

  const activateEditMode = () => {
    setEditMode(!!editMode === false);
  };

  const onCheckedChange = (id) => {
    setTableItem(
      tableItem.map((item) => ((item.id === id) ? {
        ...item,
        done: !!item.done === false
      } : item))
    );
  };

  const updateFullName = (id, text) => {
    setTableItem(
      tableItem.map((item) => ((item.id === id) ? {
        ...item,
        fullName: text
      } : item))
    );
  };

  const updateInfo = (id, idInfo, tableText) => {
    setTableItem(
      tableItem.map((item) => {
        if (item.id === id) {
          // eslint-disable-next-line no-return-assign
          item.info.map((infoItem) => ((infoItem.id === idInfo) ? {
            ...infoItem,
            text: {
              // eslint-disable-next-line no-param-reassign
              ...infoItem.text = tableText
            }
          } : infoItem));
        }
        return item;
      })
    );
  };

  const addTable = () => {
    const newTable = {
      id: tableItem.length + 1,
      fullName: '',
      done: false,
      info: [
        {
          id: 'text',
          text: ''
        },
        {
          id: 'phone',
          text: ''
        },
        {
          id: 'email',
          text: ''
        }
      ]
    };
    setTableItem([
      ...tableItem, newTable
    ]);
  };

  const deleteItemTable = () => {
    setTableItem(
      tableItem.filter((item) => item.done === false)
    );
  };
  const onSort = (text) => {
    setTableItem([
      // eslint-disable-next-line array-callback-return,consistent-return
      ...tableItem.sort((a, b) => {
        if (text === 'id' || text === 'phone') {
          return a.id - b.id ? -1 : 1;
        }
        if (text === 'fullName') {
          // eslint-disable-next-line no-nested-ternary
          return a.fullName > b.fullName ? -1 : a.fullName < b.fullName ? -1 : 1;
        }
      })
    ]);
  };

  const dragStartItem = (e, item) => {
    setCurrentItem(item);
  };
  const dragEndLeaveItem = () => {
    setTableItem(
      tableItem.map((items) => ((items.dragAndDrop === true) ? {
        ...items,
        dragAndDrop: false
      } : items))
    );
  };
  const dragOverItem = (e, item) => {
    e.preventDefault();
    setTableItem(
      tableItem.map((items) => ((items.id === item.id) ? {
        ...items,
        dragAndDrop: true
      } : items))
    );
  };
  const dropItem = (e, item) => {
    e.preventDefault();
    setTableItem(
      tableItem.map((items) => {
        if (items.id === item.id) {
          return { ...currentItem };
        }
        if (items.id === currentItem.id) {
          return { ...item };
        }
        return items;
      })
    );
  };

  return (
    <Table
      activateEditMode={activateEditMode}
      onCheckedChange={onCheckedChange}
      updateFullName={updateFullName}
      updateInfo={updateInfo}
      addTable={addTable}
      deleteItemTable={deleteItemTable}
      onSort={onSort}
      dragStartItem={dragStartItem}
      dragEndLeaveItem={dragEndLeaveItem}
      dragOverItem={dragOverItem}
      dropItem={dropItem}
      editMode={editMode}
      tableItem={tableItem}
      tableHeadlines={tableHeadlines}
    />
  );
};

TableContainer.defaultProps = {
  state: {
    tableArray: {
      tableBody: [],
      tableHeadlines: []
    }
  }
};

TableContainer.propTypes = {
  state: PropTypes.shape({
    tableArray: PropTypes.shape({
      tableBody: PropTypes.arrayOf(PropTypes.object),
      tableHeadlines: PropTypes.arrayOf(PropTypes.object)
    })
  })
};

export default TableContainer;
