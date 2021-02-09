import React from 'react'

import "./InputItem.scss"


const InputItem = (props) => {

    const {label, placeholder} = props;

    return (
        <label className="form__label">
            {label}
            <input className="form__input" type="text" placeholder={placeholder}/>
        </label>
    )
}


export default InputItem;