import { RECEIVE_ALL_OPINIONS } from '../actions/opinion_actions';

const opinionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  if (action.type === RECEIVE_ALL_OPINIONS) {
    return action.opinions;
  } else {
    return newState;
  }
};

export default opinionsReducer;
