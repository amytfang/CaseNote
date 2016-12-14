import * as APIUtil from '../util/suggestion_api_util';
import { clearErrors, requestToServer } from './general_actions';

export const RECEIVE_SUGGESTION = "RECEIVE_SUGGESTION";
export const RECEIVE_SUGGESTION_ERRORS = "RECEIVE_SUGGESTION_ERRORS";

export const receiveSuggestion = (suggestion) => ({
  type: RECEIVE_SUGGESTION,
  suggestion
});

export const receiveSuggestionErrors = (errors) => ({
  type: RECEIVE_SUGGESTION_ERRORS,
  errors
});

export function createSuggestion(suggestion) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.createSuggestion(suggestion).then(
      (sugg) => dispatch(receiveSuggestion(sugg)),
      (errors) => dispatch(receiveSuggestionErrors(errors))
    );
  };
}

export function editSuggestion(suggestion) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.editSuggestion(suggestion).then(
      (sugg) => dispatch(receiveSuggestion(sugg)),
      (errors) => dispatch(receiveSuggestionErrors(errors))
    );
  };
}

export function deleteSuggestion(id) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.deleteSuggestion(id).then(
      () => dispatch(receiveSuggestion({})),
      (errors) => dispatch(receiveSuggestionErrors(errors))
    );
  };
}
