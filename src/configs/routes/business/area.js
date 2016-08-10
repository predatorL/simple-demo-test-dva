export default {
  path: 'area',
  getComponent: (location, callback) => {
    require.ensure([], (require) => {
      callback(null, require('../../../components/list.jsx'));
    })
  },
}
