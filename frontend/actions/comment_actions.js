import * as APIUtil from '../util/comment_api_util';
import { clearErrors, requestToServer } from './general_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export function createComment(comment) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.createComment(comment).then(
      (com) => dispatch(receiveComment(com)),
      (errors) => dispatch(receiveCommentErrors(errors))
    );
  };
}

export function deleteComment(id) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.deleteComment(id).then(
      () => dispatch(receiveComment({})),
      (errors) => dispatch(receiveCommentErrors(errors))
    );
  };
}
