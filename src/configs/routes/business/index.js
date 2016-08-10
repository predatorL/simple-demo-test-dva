const subRoutes = [
  require('./product_setup'),
  require('./area'),
];
export default {
  path: 'business',
  childRoutes: subRoutes
}
