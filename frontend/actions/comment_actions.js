import * as APIUtil from '../util/comment_api_util';

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
    return APIUtil.createComment(comment).then(
      (com) => dispatch(receiveComment(com)),
      (errors) => dispatch(receiveCommentErrors(errors))
    );
  };
}

export function deleteComment(id) {
  return (dispatch) => {
    return APIUtil.deleteComment(id).then(
      () => dispatch(receiveComment({})),
      (errors) => dispatch(receiveCommentErrors(errors))
    );
  };
}
