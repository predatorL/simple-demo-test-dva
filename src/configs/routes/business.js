const subRoutes = [
  {
    path: 'area',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('../../pages/business/area.jsx'));
      })
    },
  },
  {
    path: 'product_setup',
    getComponent: (location, callback) => {
      require.ensure([], (require) => {
        callback(null, require('../../pages/business/product_setup.jsx'));
      })
    },
  }

];
export default {
  path: 'business',
  childRoutes: subRoutes
}
