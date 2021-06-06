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
    USER_SIGNOUT,
    USER_CHECKIN_REQUEST,
    USER_CHECKIN_SUCCESS,
    USER_CHECKIN_FAIL,
    USER_LISTCHECKEDIN_REQUEST,
    USER_LISTCHECKEDIN_SUCCESS,
    USER_LISTCHECKEDIN_FAIL
} from "../constants/userConstants"

export const signin = (steamid) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { steamid } });
    try {
        const { data } = await Axios.post(`${config.BACKEND_URL}/api/user/signin`, { steamid: steamid });
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

export const checkin = (userId, username, userlvl) => async (dispatch) => {
    dispatch({
        type: USER_CHECKIN_REQUEST,
        payload: { userId, username, userlvl }
    });

    try {
        const { data } = await Axios.post(`${config.BACKEND_URL}/api/user/checkin`, {
        userId,
        username,
        userlvl
        });
        dispatch({
            type: USER_CHECKIN_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: USER_CHECKIN_FAIL,
            payload: error.message
        });
    }
}

export const listCheckedIn = () => async (dispatch) => {
    dispatch({
        type: USER_LISTCHECKEDIN_REQUEST
    });

    try {
        const { data } = await Axios.get(`${config.BACKEND_URL}/api/users/checkedin`);
        dispatch({
            type: USER_LISTCHECKEDIN_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: USER_LISTCHECKEDIN_FAIL,
            payload: error.message
        });
    }
}

export const register = (username, steamid, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: { username, steamid, email, password }
    });

    try {
        const { data } = await Axios.post(`${config.BACKEND_URL}/api/user/create`, {
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
        const { data } = await Axios.get(`${config.BACKEND_URL}/api/users`);
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

