import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app';
import Home from './home';
import SessionFormContainer from './session_form/session_form_container';
import OpinionIndexContainer from './opinions/opinion_index_container';
import OpinionCreateFormContainer from './opinions/opinion_create_form_container';
import OpinionDetailContainer from './opinions/opinion_detail_container';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/index" component={OpinionIndexContainer} />
        <Route path="/new" component={OpinionCreateFormContainer} />
        <Route path="/opinions/:opinionId"
          component={OpinionDetailContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
