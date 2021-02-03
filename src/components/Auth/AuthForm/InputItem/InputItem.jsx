import React from 'react'
import "./InputItem.scss"



const InputItem = (props) => {

    return (
        <label className="form__label">
            {props.label}
            <input className="form__input" type="text" placeholder={props.placeholder} />
        </label>
    )
}



export default InputItem;