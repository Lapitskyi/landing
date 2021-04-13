import React from "react";


const TableCheckbox = ({id, done, onCheckedChange}) => {
    return (
        <td className="table__td">
            <input type="checkbox"
                   checked={done}
                   onChange={() => {
                       onCheckedChange(id)
                   }}
            />
            {id}
        </td>
    )
}

export default TableCheckbox;