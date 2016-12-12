import { RECEIVE_ANNOTATION } from '../actions/annotation_actions';
import { merge } from 'lodash';

const annotationDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  if (action.type === RECEIVE_ANNOTATION) {
    return action.annotation;
  } else {
    return newState;
  }
};

export default annotationDetailReducer;
