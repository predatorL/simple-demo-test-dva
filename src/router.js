import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import pageRouts from './configs/Routes';

const routes = {
    path: '/',
    component: require('./routes/App'),
    indexRoute: { 
        getComponent: (location, cb) => {require.ensure([], (require) => {cb(null, require('./pages/Index'));})}
    },
    childRoutes: pageRouts
};

export default function({ history }) {
  return (
    <Router routes={routes} history={history} />
  );
};
