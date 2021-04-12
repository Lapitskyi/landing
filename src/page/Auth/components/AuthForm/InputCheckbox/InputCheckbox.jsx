import React from 'react';

import "../../../scss/InputCheckbox.scss"



const InputCheckbox = (props) => {
    return (
        <label className="form__label-checkbox">
            <input className="form__checkbox" type="checkbox" />
            <span class="form__check-style"></span> Remember me
        </label>
    )
}


export default InputCheckbox;