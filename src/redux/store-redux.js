import { combineReducers, createStore } from 'redux';
import aboutReducer from './about-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  aboutPage: aboutReducer,
  authPage: authReducer
});

const store = createStore(reducers);

export default store;
