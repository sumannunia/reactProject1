import * as types from "./ActionTypes";



export function loggedIn(payload) {
    return {
       type: types.UPDATE_LOGGED_IN,
       payload: payload,
    }
 }