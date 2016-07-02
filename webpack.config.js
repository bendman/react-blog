/* eslint-disable no-var, comma-dangle, object-shorthand */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var exclusions = path.join(__dirname, 'node_modules');

var config = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      './client/src/index.jsx'
    ],
    common: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-router',
      'core-js'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './client/srv'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: exclusions,
        loaders: ['babel', 'eslint']
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
    new ExtractTextPlugin('styles.bundle.css'),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js'),
    new webpack.optimize.DedupePlugin()
  ],
  postcss: function postCSSPlugins() {
    return [
      require('autoprefixer'), require('precss') // eslint-disable-line global-require
    ];
  }
};

module.exports = config;
