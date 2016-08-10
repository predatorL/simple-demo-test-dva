import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';
import pageRouts from './routes/index';

const routes = {
  path: '/',
  component: require('./components/App'),
  indexRoute: {
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./components/List.jsx'));
      })
    }
  },
  childRoutes: pageRouts
};
pageRouts.push({
  path: '*',
  getComponent: (location, callback) => {
    require.ensure([], (require) => {
      callback(null, require('../page/error/Error404'));
    })
  }
});
export default function({history}) {
  return (<Router routes={routes} history={history} />);
};
