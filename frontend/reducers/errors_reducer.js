import { RECEIVE_SIGNUP_ERRORS, RECEIVE_LOGIN_ERRORS } from '../actions/session_actions';

const defaultState = {
  signup: { errors: [] },
  signin: { errors: [] },
  opinion: { errors: [] },
  annotation: { errors: [] },
  suggestion: { errors: [] },
  comment: { errors: [] },
};

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_LOGIN_ERRORS:
      newState["signin"]["errors"] = action.errors;
      return newState;
    case RECEIVE_SIGNUP_ERRORS:
      newState["signup"]["errors"] = action.errors;
      return newState;
    default:
      return newState;
  }
};

export default errorsReducer;
