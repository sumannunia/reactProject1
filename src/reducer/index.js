import * as types from "./ActionTypes";


let state_app = {
    redux_state_loggedIn: false,
}

const reducer = (state = state_app, action) => {
   switch (action.type) {
      case types.UPDATE_LOGGED_IN: return { ...state , redux_state_loggedIn: action.payload}
      default: return state
   }
}
export default reducer;