import { REQUEST_TO_SERVER } from '../actions/general_actions';
import { RECEIVE_ANNOTATION } from '../actions/annotation_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import {
  RECEIVE_ALL_OPINIONS,
  RECEIVE_SINGLE_OPINION
} from '../actions/opinion_actions';
import { RECEIVE_SUGGESTION } from '../actions/suggestion_actions';


const defaultState = false;

const loadingReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUEST_TO_SERVER:
      // console.log("loading");
      return true;
    case RECEIVE_ANNOTATION:
    case RECEIVE_COMMENT:
    case RECEIVE_ALL_OPINIONS:
    case RECEIVE_SINGLE_OPINION:
    case RECEIVE_SUGGESTION:
      // console.log("loaded");
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
