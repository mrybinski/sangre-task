const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/front/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassExtract = new ExtractTextPlugin({
  allChunks: true,
  filename: '[name][hash:6].css'
});

const scss = {
  files: ['**/*.scss'],
  syntaxt: 'scss'
};

const webpack = require('webpack');

module.exports = {
    context:  path.join(__dirname, '/front'),
    entry: {
        app: "./app.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                query: {
                    plugins: ['transform-class-properties']
                }
            }
        ],
        rules: [
            {
              test: /\.jsx?$/,
              enforce: 'pre',
    
              loaders: ['babel-loader?plugins[]=transform-class-properties', 'eslint-loader?emitWarning=true'],
            },
            {
              test: /\.scss$/,
              use: sassExtract.extract({
                  use: [
                      {
                          loader: 'css-loader',
                          options: {
                              url: false
                          }
                      },
                      {
                        loader: 'sass-loader',
                        options: {
                            url: false
                        }
                    }
                  ]
              })
            },
          ],
    },
    devtool: 'inline-source-map',
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    plugins: [
        htmlWebpackPluginConfig,
        sassExtract,
        new styleLintPlugin(scss)
    ]
};