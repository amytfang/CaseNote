import { RECEIVE_SINGLE_OPINION } from '../actions/opinion_actions';
import { merge } from 'lodash';

const opinionDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  if (action.type === RECEIVE_SINGLE_OPINION) {
    return action.opinion;
  } else {
    return newState;
  }
};

export default opinionDetailReducer;
