import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Table.scss';
import arrows from '../../../assets/icon/arrows.png';

const TableHeader = ({
  tableHeadlines,
  onSort
}) => (
  <>
    <tr className="table__tr ">
      <th className="table__th table__th-header">
        <div className="table__header-title">№</div>
        <button
          type="button"
          className="table__header-btn"
          onClick={(e) => {
            onSort('id', e);
          }}
        >
          <img className="table__header-icon" src={arrows} alt="arrows" />
        </button>
      </th>

      <>
        {tableHeadlines.map((item) => (
          <th className="table__th table__th-header" key={item.id}>
            <div className="table__header-title">{item.id}</div>
            <button
              type="button"
              className="table__header-btn"
              onClick={(e) => {
                onSort(`${item.id}`, e);
              }}
            >
              <img className="table__header-icon" src={arrows} alt="arrows" />
            </button>
          </th>
        ))}
      </>
    </tr>
  </>
);

TableHeader.defaultProps = {
  tableHeadlines: [],
  onSort: () => {
  }
};
TableHeader.propTypes = {
  tableHeadlines: PropTypes.arrayOf(PropTypes.object),
  onSort: PropTypes.func
};

export default TableHeader;
