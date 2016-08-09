import React, {
  PropTypes
} from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Link
} from 'dva/router';
import pageRouts from './configs/Routes';

const routes = {
  path: '/',
  component: require('./routes/App'),
  indexRoute: {
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/Index'));
      })
    }
  },
  childRoutes: pageRouts
};

export default function({
  history
}) {
  return ( <Router routes={routes}  history={history} />
  );
};
