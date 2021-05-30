import {LOAD_ROOM} from '../types'

export const loadRooms = (rooms) => {
    return {
        type: LOAD_ROOM,
        payload: {
            rooms
        }
    }
}