import React from 'react';


const TableItem = (props) => {
    const {id, name, info} = props;

    return (
        <tr onDoubleClick={(e)=>{props.activateEditMode(id)}}>
            <td> {id}</td>
            <td> {name}</td>
            {info.map((info) =>
                <td key={info.id}>
                    {info.text}
                </td>
            )}
        </tr>
    )

}

export default TableItem;