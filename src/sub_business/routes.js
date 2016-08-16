const subRoutes = [
  {
    path: 'area',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/area'));
      })
    },
  },
  {
    path: 'product_setup',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/product_setup'));
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
    path: 'employee_list',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/employee_list'));
      })
    },
  },

  {
    path: 'knight_check_log',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/knight_check_log'));
      })
    },
  },
  {
    path: 'knight_check',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/knight_check'));
      })
    },
  },
  {
    path: 'knight_list',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/knight_list'));
      })
    },
  },
  {
    path: 'product_setup',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('./pages/product_setup'));
      })
    },
  }

];
export default {
  path: 'sub_business',
  childRoutes: subRoutes
}
