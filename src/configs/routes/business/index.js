const subRoutes = [
  require('./productSetup'),
  require('./area'),
];
export default {
  path: 'business',
  childRoutes: subRoutes
}
