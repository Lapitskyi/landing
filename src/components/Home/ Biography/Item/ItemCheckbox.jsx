import React from "react";


const ItemCheckbox = ({id, done, onCheckedChange}) => {
    return (
        <td>
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

export default ItemCheckbox;