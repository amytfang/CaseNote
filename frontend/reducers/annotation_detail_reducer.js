import { RECEIVE_ANNOTATION } from '../actions/annotation_actions';
import { RECEIVE_SUGGESTION, DELETE_SUGGESTION } from '../actions/suggestion_actions';
import { merge } from 'lodash';

const annotationDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ANNOTATION:
      return action.annotation;
    case RECEIVE_SUGGESTION:
      if (newState.hasOwnProperty("suggestions")) {
        Object.assign(newState.suggestions, action.suggestion);
      } else {
        newState["suggestions"] = action.suggestion;
      }
      return newState;
    case DELETE_SUGGESTION:
    default:
      return newState;
  }
};

export default annotationDetailReducer;
