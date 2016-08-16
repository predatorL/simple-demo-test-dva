const subRoutes = [
  {
    path: 'merchants_info',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/merchants_info'));
      })
    },
  },
  {
    path: 'my_account',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/my_account'));
      })
    },
  }

];
export default {
  path: 'sub_account',
  childRoutes: subRoutes
}
