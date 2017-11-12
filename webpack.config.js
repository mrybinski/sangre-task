const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/front/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const defaultPort = 3001;
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



module.exports = (env) => ({
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: (env && env.port) || defaultPort
    },
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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]',
                    publicPath: '/'
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
              test: /\.(s?)css$/,
              use: sassExtract.extract({
                use: 'css-loader!resolve-url-loader!sass-loader?sourceMap',
                fallback: 'style-loader'
              })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]',
                    publicPath: '/'
                }
            }
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
        new styleLintPlugin(scss),
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify(env.apiUrl)
          }),
    ]
});