import React from 'react'
import PropTypes from "prop-types";

import '../scss/AuthForm.scss';


const AuthForm = (props) => {

    let onInputText =()=>{};

    return (
        <form className="form">
            {props.auth.input.map((input) =>
                <label className="form__label" key={input.id}>
                    {input.label}
                    <input className="form__input"
                           type={input.type}
                           placeholder={input.placeholder}
                           onChange={onInputText}
                           value=""/>
                </label>
            )}

            <button className="form__btn btn" type="submit"> {props.auth.btn} </button>
        </form>

    )
}

AuthForm.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string

}


export default AuthForm;