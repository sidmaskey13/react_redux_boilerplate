import axios from 'axios'
import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from "./type";

export const login = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //request body
    const body = JSON.stringify({ username, password });
    dispatch({
        type: LOGIN_SUCCESS,
        // payload: res.data
        payload: 'Token'
    });
};
export const register = (formdata) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    dispatch({
        type: LOGIN_SUCCESS,
        // payload: res.data
        payload: 'Token'
    });
};

export const logOut = () => (dispatch, getState) => {
    dispatch({
        type: LOGOUT_SUCCESS,
    });
};



//setup config with token
export const tokenConfig = getState => {
    const token = getState().auth.token;
    //config headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //If token then add to header
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config
}