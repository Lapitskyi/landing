import React from "react";


const CheckboxTable = ({id, done, onCheckedChange}) => {
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

export default CheckboxTable;