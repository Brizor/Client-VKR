import {LOAD_ROOM} from '../types';

const initialState = {
    rooms: []
}

const roomReducer = (state=initialState, action) => {
    switch (action.type){
        case LOAD_ROOM:
            return {
                ...state, 
                rooms: action.payload.rooms
            };
        default: return state;
    }
}

export default roomReducer;