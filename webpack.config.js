var path = require('path');

var exclusions = path.join(__dirname, 'node_modules');

var config = {
    entry: {
        'main': [
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
                loaders: ['style', 'css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]', 'postcss']
            }
        ]
    },
    postcss: function () {
        return [
            require('autoprefixer'), require('precss')
        ];
    }
};

module.exports = config;
