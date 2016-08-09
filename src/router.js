import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import App from './routes/App';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="user">
          <Route path="user_list" component={App}/>
          <Route path="user_add" component={App}/>
        </Route>
      </Route>
    </Router>
  );
};
