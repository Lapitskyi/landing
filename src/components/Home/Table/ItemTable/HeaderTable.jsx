import React from 'react';
import '../scss/Table.scss'
import arrows from '../../../../assets/icon/arrows.png'

const HeaderTable = ({tableHeadlines, ...props}) => {

    return (
        <>
            <tr className="table__tr ">
                <th className="table__th table__th-header">
                    <div className="table__header-title">№</div>
                    <button className="table__header-btn"
                            onClick={(e) => {
                                props.onSort("id", e)
                            }}>
                        <img className="table__header-icon" src={arrows} alt="arrows"/>
                    </button>
                </th>

                <>
                    {tableHeadlines.map(item =>
                        <th className="table__th table__th-header" key={item.id}>
                            <div className="table__header-title">{item.id}</div>
                            <button className="table__header-btn"
                                    onClick={(e) => {
                                        props.onSort(`${item.id}`, e)
                                    }}>
                                <img className="table__header-icon" src={arrows} alt="arrows"/>
                            </button>
                        </th>
                    )}
                </>
            </tr>
        </>
    )
}

export default HeaderTable;