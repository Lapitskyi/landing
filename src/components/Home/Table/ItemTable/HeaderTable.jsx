import React from 'react';
import '../scss/Table.scss'
import arrows from '../../../../assets/icon/arrows.png'

const HeaderTable = (props) => {
    return (
        <>
            <tr  >
                <th >
                     <div className="table__header-title">№</div>
                    <button className="table__header-btn" onClick={(e)=>{props.onSort('id',e)}}>
                        <img className="table__header-icon" src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className="table__header-title">FIO</div>
                    <button className="table__header-btn" onClick={(e)=>{props.onSort('fullName',e)}}>
                        <img className="table__header-icon" src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className="table__header-title">Position</div>
                    <button className="table__header-btn" onClick={(e)=>{props.onSort('position',e)}}>
                        <img className="table__header-icon" src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className="table__header-title">Phone</div>
                    <button className="table__header-btn" onClick={(e)=>{props.onSort('phone',e)}}>
                        <img className="table__header-icon" src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className="table__header-title">Email</div>
                    <button className="table__header-btn" onClick={(e)=>{props.onSort('email',e)}}>
                        <img className="table__header-icon" src={arrows} alt="arrows"/>
                    </button>
                </th>
            </tr>


        </>

    )
}

export default HeaderTable;