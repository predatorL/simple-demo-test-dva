const subRoutes = [
  {
    path: 'merchants_info',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/merchants_info.jsx'));
      })
    },
  },
  {
    path: 'merchants_info_submission',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/merchants_info_submission.jsx'));
      })
    },
  },
  {
    path: 'my_Account',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/my_Account.jsx'));
      })
    },
  }

];
export default {
  path: 'sub_account',
  childRoutes: subRoutes
}
