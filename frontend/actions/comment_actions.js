import * as APIUtil from '../util/comment_api_util';
import { clearErrors } from './general_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  id
});

export function createComment(comment) {
  return (dispatch) => {
    return APIUtil.createComment(comment).then(
      (com) => dispatch(receiveComment(com)),
      (errors) => dispatch(receiveCommentErrors(errors))
    );
  };
}

export function deleteComment(id) {
  return (dispatch) => {
    return APIUtil.deleteComment(id).then(
      (comment) => dispatch(removeComment(comment)),
      (errors) => dispatch(receiveCommentErrors(errors))
    );
  };
}
