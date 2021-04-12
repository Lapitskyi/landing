import React from "react"

import {connect} from "react-redux";
import AboutItem from "./AboutItem";


let mapStateToProps = (state) => {
    return {
        about: state.aboutPage.about
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(AboutItem)

