import React from "react";


const ItemCheckbox = (props) => {
    return (
        <td>
            <input type="checkbox"
                   checked={props.done}
                   onChange={() => {
                       props.onCheckedChange(props.id)
                   }}
            />
            {props.id}
        </td>
    )
}

export default ItemCheckbox;