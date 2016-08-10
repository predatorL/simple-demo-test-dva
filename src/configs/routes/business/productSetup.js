export default {
  path: 'product_setup',
  getComponent: (location, callback) => {
    require.ensure([], (require) => {
      callback(null, require('../../../components/form.jsx'));
    })
  },
}
