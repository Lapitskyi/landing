import React from "react";
import './ImputForm.scss';


export const InputForm = ({id, label, type, placeholder, onChange, value}) => {

    return (
        <div>
            <label key={id} >
                {label}
                <input type={type}
                       placeholder={placeholder}
                       onChange={onChange}
                       value={value}
                />
            </label>
        </div>
    )
}

