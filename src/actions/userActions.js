import Axios from "axios";
import config from '../config';

import { 
    USER_LIST_FAIL, 
    USER_LIST_REQUEST, 
    USER_LIST_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT
} from "../constants/userConstants"

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post(`${config.baseURL}/api/user/signin`, { email: email, password: password });
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch(error) {
        dispatch({type: USER_SIGNIN_FAIL,
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
    });
    }
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_SIGNOUT});
}

export const register = (username, steamid, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: { username, steamid, email, password }
    });

    try {
        const { data } = await Axios.post(`${config.baseURL}/api/user/create`, {
        username,
        steamid,
        email,
        password
        });
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.message
        });
    }
}

export const listUsers = () => async (dispatch) => {
    dispatch({
        type: USER_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get(`${config.baseURL}/api/users`);
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.message
        });
    }
}

