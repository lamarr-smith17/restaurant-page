const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
            {
                test: /\.(css|scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },

};  