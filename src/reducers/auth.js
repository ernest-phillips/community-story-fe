import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/auth';

const initialState = {
    jwtToken: null, // jwtToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        console.log("Setting Token")
        return Object.assign({}, state, {
            jwtToken: action.jwtToken
        });
    } else if (action.type === CLEAR_AUTH) {
        console.log("Clearing Token")
        return Object.assign({}, state, {
            jwtToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        console.log("Requesting Token")
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        console.log("Success Token")
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser
        });
    } else if (action.type === AUTH_ERROR) {
        console.log("Authorization Error")
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}