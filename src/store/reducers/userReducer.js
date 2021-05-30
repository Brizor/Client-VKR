import {LOAD_USER} from '../types';

const initialState = {
    user_id: null,
    username: null,
    userkey: null
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
        case LOAD_USER:
            return {
                ...state, 
                user_id: action.payload.user_id, 
                username: action.payload.username,
                userkey: action.payload.userkey
            };
        default: return state;
    }
}

export default userReducer;