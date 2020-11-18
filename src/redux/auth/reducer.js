import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from "./type";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            };
        default: return state

    }
};
export default AuthReducer