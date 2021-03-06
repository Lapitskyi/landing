const LOGIN = 'LOGIN';
const REGISTRATION = 'REGISTRATION';
const RESET = 'RESET';

const initialState = {
  login: [
    {
      id: 'email',
      input: ''
    },
    {
      id: 'password',
      input: ''
    }
  ],

  registration: {},

  reset: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {};
    case REGISTRATION:
      return {};
    case RESET:
      return {};
    default:
      return state;
  }
};

export const authLoginAC = () => ({ type: LOGIN });
export const authRegistrationAC = () => ({ type: REGISTRATION });
export const authResetAC = () => ({ type: RESET });

export default authReducer;
