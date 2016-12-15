import { RECEIVE_ANNOTATION,
  CLEAR_ANNOTATION
} from '../actions/annotation_actions';
import { RECEIVE_SUGGESTION,
  REMOVE_SUGGESTION
} from '../actions/suggestion_actions';
import { RECEIVE_ANNOTATION_VOTE, RECEIVE_SUGGESTION_VOTE } from '../actions/vote_actions';
import { merge } from 'lodash';

const annotationDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ANNOTATION:
      return action.annotation;
    case CLEAR_ANNOTATION:
      return {};
    case RECEIVE_SUGGESTION:
      if (newState.hasOwnProperty("suggestions")) {
        Object.assign(newState.suggestions, action.suggestion);
      } else {
        newState["suggestions"] = action.suggestion;
      }
      return newState;
    case REMOVE_SUGGESTION:
      delete newState.suggestions[action.id];
      return newState;
    case RECEIVE_ANNOTATION_VOTE:
      const oldAnnUserVote = newState.userVote;
      if (!oldAnnUserVote || oldAnnUserVote !== action.userVote) {
        newState.numVotes += action.userVote - oldAnnUserVote;
        newState.userVote = action.userVote;
        return newState;
      } else {
        return newState;
      }
    case RECEIVE_SUGGESTION_VOTE:
      const oldSugUserVote = newState.suggestions[action.id].userVote;
      if (!oldSugUserVote || oldSugUserVote !== action.userVote) {
        newState.suggestions[action.id].numVotes += action.userVote - oldSugUserVote;
        newState.suggestions[action.id].userVote = action.userVote;
        return newState;
      } else {
        return newState;
      }
    default:
      return newState;
  }
};

export default annotationDetailReducer;
