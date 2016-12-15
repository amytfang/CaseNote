import { RECEIVE_SINGLE_OPINION } from '../actions/opinion_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ANNOTATION,
  REMOVE_ANNOTATION
} from '../actions/annotation_actions';
import { RECEIVE_COMMENT_VOTE } from '../actions/vote_actions';
import { merge } from 'lodash';

const opinionDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_OPINION:
      return action.opinion;
    case RECEIVE_ANNOTATION:
      const { annotation } = action;
      const newAnno = { [annotation.id]: {
        id: annotation.id,
        start_idx: annotation.start_idx,
        length: annotation.length
      }};
      if (newState.hasOwnProperty("annotations")) {
        Object.assign(newState.annotations, newAnno);
      } else {
        newState["annotations"] = newAnno;
      }
      return newState;
    case REMOVE_ANNOTATION:
      delete newState.annotations[action.id];
      return newState;
    case RECEIVE_COMMENT:
      if (newState.hasOwnProperty("comments")) {
        Object.assign(newState.comments, action.comment);
      } else {
        newState["comments"] = action.comment;
      }
      return newState;
    case RECEIVE_COMMENT_VOTE:
    debugger
      const oldUserVote = newState.comments[action.id].userVote;
      if (!oldUserVote || oldUserVote !== action.userVote) {
        newState.comments[action.id].numVotes += action.userVote - oldUserVote;
        newState.comments[action.id].userVote = action.userVote;
        debugger
        return newState;
      } else {
        return newState;
      }
    case REMOVE_COMMENT:
    default:
      return newState;
  }
};

export default opinionDetailReducer;
