import React from 'react';


const TableItemInput = (props) => {
    const {id, name, info} = props;

    return (
        <tr onDoubleClick={props.deactivateEditMode}>
            <td>
                <input type="checkbox"
                       checked={props.done}
                       onChange={() => {
                           props.onCheckedChange(props.id)
                       }}
                />
                {id}
            </td>
            <td>
                <input
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={(e) => {
                        props.setAddText(e.target.value)
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
                            props.setAddText(e.target.value)
                        }}
                    />
                </td>
            )}
        </tr>
    )

}

export default TableItemInput;