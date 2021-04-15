import React from 'react'
import PropTypes from "prop-types";

import '../scss/AuthForm.scss';


const AuthForm = ({auth: {input, btn}}) => {

    let onInputText = () => {
    };

    return (
        <form className="form">
            {input.map((input) =>
                <label className="form__label" key={input.id}>
                    {input.label}
                    <input className="form__input"
                           type={input.type}
                           placeholder={input.placeholder}
                           onChange={onInputText}
                           value=""/>
                </label>
            )}

            <button className="form__btn btn" type="submit"> {btn} </button>
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