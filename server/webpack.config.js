/* eslint-disable node/no-unpublished-require */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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



// ========================== NEW ==================== //
// module.exports = {
//   entry: [
//     './public/javascript/index.js',
//     './public/scss/style.scss',
//     './index.ejs'
//   ],
//   output: {
//     filename: './js/bundle.js'
//   },
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.ejs$/,
// 				loader: 'ejs-loader',
// 				query: {
// 					interpolate : /\{\{(.+?)\}\}/g,
// 					evaluate    : /\[\[(.+?)\]\]/g
//         }
//       },
//       {
//         test: /\.js$/,
//         include: path.resolve(__dirname, 'public/javascript'),
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: 'env'
//           }
//         }
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {name: 'img/[name].[ext]'}  
//           }
//         ]
//       },
//       {
//         test: /\.(sass|scss)$/,
//         include: path.resolve(__dirname, 'public/scss'),
//         use: ExtractTextPlugin.extract({
//           use: [{
//               loader: "css-loader",
//               options: {
//                 sourceMap: true,
//                 minimize: true,
//                 url: false
//               }
//             },
//             {
//               loader: "resolve-url-loader"
//             },
//             {
//               loader: "sass-loader",
//               options: {
//                 sourceMap: true
//               }
//             }
//           ]
//         })
//       },
//       {
//         test: require.resolve('jquery'),
//         use: [{
//             loader: 'expose-loader',
//             options: 'jQuery'
//         },{
//             loader: 'expose-loader',
//             options: '$'
//         }]
//       },

//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({
//       filename: './css/style.bundle.css',
//       allChunks: true,
//     }),
//     new CopyWebpackPlugin([
//       {
//         from: './public/fonts',
//         to: './fonts'
//       },
//       {
//         from: './public/images',
//         to: './img'
//       }
//     ]),
//     new HtmlWebpackPlugin({
//       template: 'ejs-render!./views/index.ejs'
//     }),
//     new webpack.ProvidePlugin({
//       identifier: ['module1', 'pro perty1'],
//       $: 'jquery',
//       jquery: 'jquery',
//       jQuery: 'jquery',
//       'window.jquery': 'jquery',
//       'window.jQuery': 'jquery',
//       'window.$': 'jquery',
//     }),
//   ]
// };