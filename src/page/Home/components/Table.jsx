import React from "react";

import "../scss/Table.scss";

import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import TableCheckbox from "./TableCheckbox";
import sprite from "../../../assets/spriteSvg/sprite.svg";


const Table = (props) => {

    return (
        <div className="inner">
            <table className="table">
                <thead>
                <TableHeader
                    tableHeadlines={props.tableHeadlines}
                    onSort={props.onSort}
                />
                </thead>
                <tbody>
                {
                    props.tableItem.map(item =>
                        <tr className={item.dragAndDrop === true ? "drag" : "table__tr"}
                            key={item.id}
                            onDoubleClick={props.activateEditMode}
                            draggable
                            onDragStart={(e) => props.dragStartItem(e, item)}
                            onDragLeave={(e) => props.dragEndLeaveItem(e)}
                            onDragEnd={(e) => props.dragEndLeaveItem(e)}
                            onDragOver={(e) => props.dragOverItem(e, item)}
                            onDrop={(e) => props.dropItem(e, item)}
                        >
                            <TableCheckbox
                                onCheckedChange={props.onCheckedChange}
                                done={item.done}
                                id={item.id}
                            />

                            <TableCell
                                editMode={props.editMode}
                                val={item.fullName}
                                id={item.id}
                                updateText={(newText) => props.updateFullName(item.id, newText)}

                            />
                            {item.info.map(info =>
                                <TableCell
                                    editMode={props.editMode}
                                    key={info.id}
                                    id={info.id}
                                    val={info.text}
                                    updateText={(newText) => props.updateInfo(item.id, info.id, newText)}
                                />
                            )}
                        </tr>
                    )
                }
                </tbody>
            </table>

            <div className="table__btn-box">
                <button className="table__btn"
                        onClick={props.addTable}>
                    <svg className="table__btn-icon">
                        <use href={sprite + "#addTable"}></use>
                    </svg>
                </button>
                <button className="table__btn"
                        onClick={(e) => props.deleteItemTable(e)}>
                    <svg className="table__btn-icon">
                        <use href={sprite + "#deleteTable"}></use>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Table;