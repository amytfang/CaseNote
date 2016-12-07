import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';

// function _redirectIfLoggedIn(nextState, replace) {
//   if(store.getState().currentUser) {
//     replace("/");
//   }
// }
// <Route path="/signin"
//   component={ SessionFormContainer }
//   onEnter={ _redirectIfLoggedIn } />
//
// <Route path="/signup"
//   component={ SessionFormContainer }
//   onEnter={ _redirectIfLoggedIn } />

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>

      </Route>
    </Router>
  </Provider>
);

export default Root;
