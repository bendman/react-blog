/* eslint-disable no-var, comma-dangle, object-shorthand */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var exclusions = path.join(__dirname, 'node_modules');

var config = {
  entry: {
    main: [
      'babel-polyfill',
      './client/src/index.jsx'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './client/srv'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: exclusions,
        loaders: ['babel']
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss'
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.bundle.css')
  ],
  postcss: function postCSSPlugins() {
    return [
      require('autoprefixer'), require('precss') // eslint-disable-line global-require
    ];
  }
};

module.exports = config;
