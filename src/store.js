import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { userListReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import { matchListReducer } from './reducers/matchReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },
};
const reducer = combineReducers({
    userList: userListReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    matchList: matchListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;