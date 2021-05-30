import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import roomReducer from './reducers/roomReducer'

const rootReducer = combineReducers({
    user: userReducer,
    room: roomReducer
})

export default createStore(rootReducer)