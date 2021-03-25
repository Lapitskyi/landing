import React from "react";

const Item = (props) =>{
    return(
        <td>
            {!props.editMode ? (props.val)
                : <textarea

                    type="text"
                    placeholder="text"
                    value={props.val}
                    onChange={(e) => {
                        props.updateText(e.target.value, props.id)
                    }}
                />
            }

        </td>
    )
}

export default Item;