/* eslint-disable global-require */// use `require.ensure` for codesplitting

// Shims for require methods in Node
/* eslint-disable */
if (typeof require.ensure !== 'function') { require.ensure = function (d, c) { c(require); }; }
if (typeof require.include !== 'function') { require.include = function () {}; }
/* eslint-enable */


import { createRoutes } from 'react-router';

import PageWrapper from './components/page-wrapper';
import postList from './shared/post-list';


export default createRoutes({
  path: '/',
  component: PageWrapper,
  getIndexRoute(nextState, cb) {
    const HomePage = require('./components/home-page').default;
    cb(null, { component: HomePage });
  },
  childRoutes: Object.entries(postList).map(([path, route]) => (
    // Convert an object of path->definition to the full route format:
    // {
    //   path: String,
    //   getComponent: Function,
    //   ...
    // }
    Object.assign({}, {
      getComponent: route.getComponent,
    }, { path })
  )),
});
