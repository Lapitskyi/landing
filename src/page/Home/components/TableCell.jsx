import React from "react";

const TableCell = ({editMode, val , updateText }) =>{
    return(
        <td className="table__td">
            {!editMode ? (val)
                : <textarea
                    type="text"
                    placeholder="text"
                    value={val}
                    onChange={(e) => {
                        updateText(e.target.value)
                    }}
                />
            }

        </td>
    )
}

export default TableCell;