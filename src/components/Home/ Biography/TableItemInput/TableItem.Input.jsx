import React from 'react';


const TableItemInput = (props) => {
    const {id, fullName, info, done} = props;

    return (
        <tr onDoubleClick={props.deactivateEditMode}>
            <td>
                <input type="checkbox"
                       checked={done}
                       onChange={() => {
                           props.onCheckedChange(props.id)
                       }}
                />
                {id}
            </td>
            <td>
                <input
                    type="text"
                    placeholder="fullName"
                    value={fullName}
                    onChange={(e) => {
                        props.updateText(e.target.value, props.id)
                    }}
                />
            </td>
            {info.map((info) =>
                <td key={info.id}>
                    <input
                        type="text"
                        placeholder=""
                        value={info.text}
                        onChange={(e) => {
                            props.updateText(e.target.value,  info.id)
                        }}
                    />
                </td>
            )}
        </tr>
    )

}

export default TableItemInput;