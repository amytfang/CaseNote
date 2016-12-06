import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = null, action) => {
  Object.freeze(state);
  if (action.type === RECEIVE_CURRENT_USER) {
    return action.user;
  } else {
    return state;
  }
};

export default sessionReducer;
