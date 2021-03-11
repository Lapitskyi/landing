import React from 'react';
import s from '../Biography.module.scss'
import arrows from '../../../../assets/icon/arrows.png'

const TableHeader = (props) => {
    return (
        <>
            <tr  >
                <th >
                     <div className={s.table__headerText}>№</div>
                    <button className={s.table__headerBtn} onClick={(e)=>{props.onSort(e)}}>
                        <img className={s.table__headerBtnIcon} src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className={s.table__headerText}>FIO</div>
                    <button className={s.table__headerBtn} onClick={(e)=>{props.onSort(e)}}>
                        <img className={s.table__headerBtnIcon} src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className={s.table__headerText}>Address</div>
                    <button className={s.table__headerBtn} onClick={(e)=>{props.onSort(e)}}>
                        <img className={s.table__headerBtnIcon} src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className={s.table__headerText}>Phone</div>
                    <button className={s.table__headerBtn} onClick={(e)=>{props.onSort(e)}}>
                        <img className={s.table__headerBtnIcon} src={arrows} alt="arrows"/>
                    </button>
                </th>
                <th>
                    <div className={s.table__headerText}>Email</div>
                    <button className={s.table__headerBtn} onClick={(e)=>{props.onSort(e)}}>
                        <img className={s.table__headerBtnIcon} src={arrows} alt="arrows"/>
                    </button>
                </th>
            </tr>


        </>

    )
}

export default TableHeader;