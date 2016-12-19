import * as APIUtil from '../util/opinion_api_util';
import { clearErrors } from './general_actions';
import { clearSearchResults } from './search_actions';
import { withRouter } from 'react-router';

export const RECEIVE_ALL_OPINIONS = "RECEIVE_ALL_OPINIONS";
export const RECEIVE_SINGLE_OPINION = "RECEIVE_SINGLE_OPINION";
export const RECEIVE_OPINION_ERRORS = "RECEIVE_OPINION_ERRORS";
export const CLEAR_OPINION = "CLEAR_OPINION";

export const receiveAllOpinions = (opinions) => ({
  type: RECEIVE_ALL_OPINIONS,
  opinions
});

export const receiveSingleOpinion = (opinion) => ({
  type: RECEIVE_SINGLE_OPINION,
  opinion
});

export const receiveOpinionErrors = (errors) => ({
  type: RECEIVE_OPINION_ERRORS,
  errors
});

export const clearOpinion = () => ({
  type: CLEAR_OPINION,
});

export function fetchAllOpinions() {
  return (dispatch) => {
    return APIUtil.fetchAllOpinions().then(
      (opinions) => {
        dispatch(clearSearchResults());
        dispatch(receiveAllOpinions(opinions));
      },
      (errors) => dispatch(receiveOpinionErrors(errors.responseJSON))
    );
  };
}

export function fetchSingleOpinion(id) {
  return (dispatch) => {
    return APIUtil.fetchSingleOpinion(id).then(
      (opinion) => {
        dispatch(clearSearchResults());
        dispatch(receiveSingleOpinion(opinion));
      },
      (errors) => dispatch(receiveOpinionErrors(errors.responseJSON))
    );
  };
}

export function createOpinion(opinion) {
  return (dispatch) => {
    return APIUtil.createOpinion(opinion).then(
      (op) => dispatch(receiveSingleOpinion(op)),
      (errors) => dispatch(receiveOpinionErrors(errors.responseJSON))
    );
  };
}

export function editOpinion(opinion) {
  return (dispatch) => {
    return APIUtil.editOpinion(opinion).then(
      (op) => dispatch(receiveSingleOpinion(op)),
      (errors) => dispatch(receiveOpinionErrors(errors.responseJSON))
    );
  };
}

export function deleteOpinion(id) {
  return (dispatch) => {
    return APIUtil.deleteOpinion(id);
  };
}
