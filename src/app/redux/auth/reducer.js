import * as actions from './actionTypes';

const INITIAL_STATE = {
    loginStatus: false
};

function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.LOGIN: {
            localStorage.setItem('token', action.payload)
            return {...state, loginStatus: true}
        }
        case actions.LOGOUT: {
            localStorage.removeItem('token')
            return {...state, loginStatus: false}
        }
        default:
            return state;
    }
}

export default authReducer;