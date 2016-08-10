import {componentsPath,pagesPath} from '../pathCfg';

export default [{
    path: 'product_setup',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require(componentsPath + 'Form.jsx'));
      })
    },
    childRoutes: [{
      path: '*',
      getComponent: (location, callback) => {
        require.ensure([], (require) => {
          callback(null, require(pagesPath + 'NoFound.jsx'));
        })
      },
    }]
  },
]
