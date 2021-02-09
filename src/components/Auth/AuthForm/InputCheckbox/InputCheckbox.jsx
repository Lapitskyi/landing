import React from 'react';
import PropTypes from 'prop-types'

import "./InputCheckbox.scss"



const InputCheckbox = (props) => {
    return (
        <label className="form__label-checkbox">
            <input className="form__checkbox" type="checkbox" />
            <span class="form__check-style"></span> Remember me
        </label>
    )
}

InputCheckbox.propTypes = {}

export default InputCheckbox;