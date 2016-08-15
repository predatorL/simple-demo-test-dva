import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';
let pageRouts = [
    require('./sub_business/routes'),
 ];
pageRouts.push({
  path: '/*',
  getComponent: (location, callback) => {console.log('*')
    require.ensure([], (require) => {
      callback(null, require('./pages/NoFound.jsx'));
    })
  }
});
const routes = {
  path: '/',
  component: require('./components/App'),
  indexRoute: {
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./sub_business/pages/product_setup.jsx'));
      })
    }
  },
  childRoutes: pageRouts
};

export default function({history}) {
  return (<Router routes={routes} history={history}/>);
};
