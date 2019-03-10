/* eslint-disable node/no-unpublished-require */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
/* eslint-enable node/no-unpublished-require */

module.exports = {
  entry: [
    './src/js/index.js',
    './src/scss/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './javascripts/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'img/[name].[ext]'}  
          }
        ]
      },
      {
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        },{
            loader: 'expose-loader',
            options: '$'
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './stylesheets/style.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: './src/fonts',
        to: './public/fonts'
      },
      {
        from: './src/img',
        to: './public/images'
      }
    ]),
    new webpack.ProvidePlugin({
      identifier: ['module1', 'property1'],
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    })
  ]
};
