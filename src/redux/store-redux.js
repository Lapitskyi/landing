import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import aboutReducer from './redusers/about-reducer';
import authReducer from './redusers/auth-reducer';
import pokemonReducer from './redusers/pokemon-reducer';
import tableReducer from './redusers/table-reducer';

const reducers = combineReducers({
  aboutPage: aboutReducer,
  authPage: authReducer,
  pokemonPage: pokemonReducer,
  table: tableReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
