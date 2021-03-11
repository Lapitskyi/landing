import React from 'react';


const TableItem = (props) => {


    return (
        <tr onDoubleClick={(e) => {
            props.activateEditMode(props.id)
        }}>
            <td>
                <input type="checkbox"
                       checked={props.done}
                       onChange={() => {
                           props.onCheckedChange(props.id)
                       }}
                />

                {props.id}
            </td>
            <td> {props.name}</td>
            {props.info.map((info) =>
                <td key={info.id}>
                    {info.text}
                </td>
            )}
        </tr>
    )

}

export default TableItem;