import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';
let pageRouts = [
                  require('./sub_account/routes'),
                  require('./sub_business/routes'),
                  require('./sub_finance/routes'),
                  require('./sub_schedule/routes')
 ]
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
    getComponent: (location, callback) => {console.log(123)
      require.ensure([], (require) => {
        callback(null, require('./pages/business/product_setup.jsx'));
      })
    }
  },
  childRoutes: pageRouts
};

export default function({history}) {
  return (<Router routes={routes} history={history}/>);
};
