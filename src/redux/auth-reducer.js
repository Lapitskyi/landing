let LOGIN = 'LOGIN';
let REGISTRATION = 'REGISTRATION';
let RESET = 'RESET';


let initialState = {
    login: { },

    registration: {},

    reset: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {}
        case REGISTRATION:
            return {}
        case RESET:
            return {}
        default:
            return state;
    }
}


export const authLoginAC = () => ({type: LOGIN});
export const authRegistrationAC = () => ({type: REGISTRATION});
export const authResetAC = () => ({type: RESET});

export default authReducer;