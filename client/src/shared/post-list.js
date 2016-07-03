/* eslint-disable global-require */// use `require.ensure` for codesplitting

// Shims for require methods in Node
/* eslint-disable */
if (typeof require.ensure !== 'function') { require.ensure = function (d, c) { c(require); }; }
if (typeof require.include !== 'function') { require.include = function () {}; }
/* eslint-enable */

// This solution for codesplitting is suboptimal, because it requires the post
// titles to be here and in the post itself. Ideally there would be a way to
// have the post title and summary (and maybe path) to be in it's own file,
// or exports of the post file itself.  In order to codesplit the post files
// even though those parts are loaded synchronously, it might be necessary
// to use webpack 2 and tree shaking:
// http://moduscreate.com/code-splitting-for-react-router-with-es6-imports/
export default {
  'js-generators': {
    title: 'JS Generators',
    getComponent(location, cb) {
      require.ensure([], () => {
        const TargetPost = require('../posts/generators').default;
        cb(null, TargetPost);
      });
    },
  },
  'flexbox-layouts': {
    title: 'Flexbox Layouts',
    getComponent(location, cb) {
      require.ensure([], () => {
        const TargetPost = require('../posts/flexbox').default;
        cb(null, TargetPost);
      });
    },
  },
};
