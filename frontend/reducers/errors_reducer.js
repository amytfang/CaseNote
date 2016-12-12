import { merge } from 'lodash';
import {
  RECEIVE_SIGNUP_ERRORS,
  RECEIVE_LOGIN_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_ALL_OPINIONS,
  RECEIVE_SINGLE_OPINION,
  RECEIVE_OPINION_ERRORS
} from '../actions/opinion_actions';
import {
  RECEIVE_ANNOTATION,
  RECEIVE_ANNOTATION_ERRORS
} from '../actions/annotation_actions';

const defaultState = {
  signup: { },
  signin: { },
  opinion: { },
  annotation: { },
  suggestion: { },
  comment: { },
};

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_LOGIN_ERRORS:
      newState["signin"] = action.errors;
      return newState;
    case RECEIVE_SIGNUP_ERRORS:
      newState["signup"] = action.errors;
      return newState;
    case RECEIVE_OPINION_ERRORS:
      newState["opinion"] = action.errors;
      return newState;
    case RECEIVE_ANNOTATION_ERRORS:
      newState["annotation"] = action.errors;
      return newState;
    case RECEIVE_ANNOTATION:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ALL_OPINIONS:
    case RECEIVE_SINGLE_OPINION:
      return merge({}, defaultState);
    default:
      return newState;
  }
};

export default errorsReducer;
