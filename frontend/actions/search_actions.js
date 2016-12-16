import * as APIUtil from '../util/opinion_api_util';
import { requestToServer, clearErrors } from './general_actions';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});

export function searchOpinions(query) {
  return (dispatch) => {
    dispatch(requestToServer);
    return APIUtil.searchOpinions(query).then(
      (results) => dispatch(receiveSearchResults(results))
    );
  };
}
