const subRoutes = [
  {
    path: 'area',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/area.jsx'));
      })
    },
  },
  {
    path: 'product_setup',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/product_setup.jsx'));
      })
    },
  },
  {
    path: 'staff',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/staff.jsx'));
      })
    },
  },
  {
    path: 'partner',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/partner.jsx'));
      })
    },
  }

];
export default {
  path: 'sub_business',
  childRoutes: subRoutes
}
