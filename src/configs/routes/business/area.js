export default {
  path: 'area',
  getComponent: (location, callback) => {
    require.ensure([], (require) => {
      callback(null, require('../../../pages/business/area.jsx'));
    })
  },
}
