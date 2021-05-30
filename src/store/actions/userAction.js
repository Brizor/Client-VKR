import {LOAD_USER} from '../types'

export const loadUser = (user_id, username, userkey) => {
    return {
        type: LOAD_USER,
        payload: {
            user_id,
            username,
            userkey
        }
    }
}