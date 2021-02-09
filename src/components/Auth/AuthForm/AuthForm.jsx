import React from 'react'
import PropTypes from "prop-types";

import InputItem from './InputItem/InputItem';
import './AuthForm.scss';


const AuthForm = (props) => {

    let inputsArray = props.state.input.map((input) =>
        <InputItem
            key={input.id}
            id={input.id}
            label={input.label}
            placeholder={input.placeholder}

        />)

    return (

        <form className="form">
            {inputsArray}

            <button className="form__btn btn" type="submit"> {props.state.btn} </button>
        </form>

    )
};

InputItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string

}


export default AuthForm;