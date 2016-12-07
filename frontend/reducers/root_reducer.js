import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import opinionsReducer from './opinions_reducer';
import opinionDetailReducer from './opinion_detail_reducer';

const rootReducer = combineReducers({
  currentUser: sessionReducer,
  formErrors: errorsReducer,
  opinions: opinionsReducer,
  opinionDetail: opinionDetailReducer,
});

export default rootReducer;
