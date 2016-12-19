import * as APIUtil from '../util/vote_api_util';
import { clearErrors } from './general_actions';

export const RECEIVE_ANNOTATION_VOTE = "RECEIVE_ANNOTATION_VOTE";
export const RECEIVE_SUGGESTION_VOTE = "RECEIVE_SUGGESTION_VOTE";
export const RECEIVE_COMMENT_VOTE = "RECEIVE_COMMENT_VOTE";

export const receiveAnnotationVote = (userVote, id) => ({
  type: RECEIVE_ANNOTATION_VOTE,
  userVote,
  id
});

export const receiveSuggestionVote = (userVote, id) => ({
  type: RECEIVE_SUGGESTION_VOTE,
  userVote,
  id
});

export const receiveCommentVote = (userVote, id) => ({
  type: RECEIVE_COMMENT_VOTE,
  userVote,
  id
});

export function downvoteAnnotation(id) {
  return (dispatch) => {
    return APIUtil.downvoteAnnotation(id).then(
      (userVote) => dispatch(receiveAnnotationVote(userVote, id))
    );
  };
}

export function upvoteAnnotation(id) {
  return (dispatch) => {
    return APIUtil.upvoteAnnotation(id).then(
      (userVote) => dispatch(receiveAnnotationVote(userVote, id))
    );
  };
}

export function downvoteSuggestion(id) {
  return (dispatch) => {
    return APIUtil.downvoteSuggestion(id).then(
      (userVote) => dispatch(receiveSuggestionVote(userVote, id))
    );
  };
}

export function upvoteSuggestion(id) {
  return (dispatch) => {
    return APIUtil.upvoteSuggestion(id).then(
      (userVote) => dispatch(receiveSuggestionVote(userVote, id))
    );
  };
}

export function downvoteComment(id) {
  return (dispatch) => {
    return APIUtil.downvoteComment(id).then(
      (userVote) => dispatch(receiveCommentVote(userVote, id))
    );
  };
}

export function upvoteComment(id) {
  return (dispatch) => {
    return APIUtil.upvoteComment(id).then(
      (userVote) => dispatch(receiveCommentVote(userVote, id))
    );
  };
}
