import React from 'react'
import PropTypes from 'prop-types'

import "./InputItem.scss"


const InputItem = (props) => {

    return (
        <label className="form__label">
            {props.label}
            <input className="form__input" type="text" placeholder={props.placeholder}/>
        </label>
    )
}

InputItem.propTypes = {}

export default InputItem;