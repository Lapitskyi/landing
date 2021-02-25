import React from 'react'

import {connect} from "react-redux";

import {authLoginAC} from "../../redux/auth-reducer";
import Login from "./Login";


let mapStateToProps = (state) => {
    return {
        login: state.authPage.login
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        loginAuth: () => {
            dispatch(authLoginAC())
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);