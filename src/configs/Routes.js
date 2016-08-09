
export default [{
    path: 'user',
    childRoutes: [{
      path: 'user_list',
      getComponent: (location, callback) => {
        const _routes = location.routes;
        const _nowPath = _routes[2].path;
        console.log(_routes, _nowPath)
        require.ensure([], (require) => {
          callback(null, require('../components/List.jsx'));
        })
      },
    }, {
      path: 'user_add',
      getComponent: (location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../components/Form.jsx'));
        })
      }
    }]
  },



]
