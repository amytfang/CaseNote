import { RECEIVE_SIGNUP_ERRORS, RECEIVE_LOGIN_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_OPINIONS, RECEIVE_SINGLE_OPINION, RECEIVE_OPINION_ERRORS } from '../actions/opinion_actions';
import { merge } from 'lodash';

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
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_LOGIN_ERRORS:
      newState["signin"]["errors"] = action.errors;
      return newState;
    case RECEIVE_SIGNUP_ERRORS:
      newState["signup"]["errors"] = action.errors;
      return newState;
    case RECEIVE_OPINION_ERRORS:
      newState["opinion"]["errors"] = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ALL_OPINIONS:
    case RECEIVE_SINGLE_OPINION:
      return merge({}, defaultState);
    default:
      return newState;
  }
};

export default errorsReducer;