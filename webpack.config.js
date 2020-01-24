const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function(){
  return {
    mode: 'development',
    entry: {
      app:'./src/app.js'
    }
    ,
    watch: true,
    watchOptions: {
      aggregateTimeout: 300, // Process all changes which happened in this time into one rebuild
      poll: 1000, // Check for changes every second,
      ignored: /node_modules/,
      // ignored: [
      //   '**/*.scss', '/node_modules/'
      // ]
    },
    devtool: 'source-maps',
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      watchContentBase: true,
      hot: true,
      open: true,
      inline: true
    },
    plugins: [
      new CopyPlugin([
        { from: 'src/fonts', to: 'dist' },
        { from: 'src/images', to: 'dist' },
      ]),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'index.html',
        chunks: ['app'],
       template: path.resolve('./src/index.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'rekenmachine.html',
        chunks: ['app'],
       template: path.resolve('./src/rekenmachine.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'theorieDatatypes.html',
        chunks: ['app'],
       template: path.resolve('./src/theorieDatatypes.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'getallen.html',
        chunks: ['app'],
       template: path.resolve('./src/getallen.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'datums.html',
        chunks: ['app'],
       template: path.resolve('./src/datums.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'sitemap.html',
        chunks: ['app'],
       template: path.resolve('./src/sitemap.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'backgroundColor.html',
        chunks: ['app'],
       template: path.resolve('./src/backgroundColor.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'changeTextColor.html',
        chunks: ['app'],
       template: path.resolve('./src/changeTextColor.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'changeValueElement.html',
        chunks: ['app'],
       template: path.resolve('./src/changeValueElement.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'getValueOutOfAForm.html',
        chunks: ['app'],
       template: path.resolve('./src/getValueOutOfAForm.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'getValueOutOfElement.html',
        chunks: ['app'],
       template: path.resolve('./src/getValueOutOfElement.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'hoverColor.html',
        chunks: ['app'],
       template: path.resolve('./src/hoverColor.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'pureInjection.html',
        chunks: ['app'],
       template: path.resolve('./src/pureInjection.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'veranderTekst.html',
        chunks: ['app'],
       template: path.resolve('./src/veranderTekst.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'optellenEnAftrekken.html',
        chunks: ['app'],
       template: path.resolve('./src/optellenEnAftrekken.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'addButtonWithJS.html',
        chunks: ['app'],
       template: path.resolve('./src/addButtonWithJS.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'chagneIDOFfAnElement.html',
        chunks: ['app'],
       template: path.resolve('./src/chagneIDOFfAnElement.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'forloopJavascript.html',
        chunks: ['app'],
       template: path.resolve('./src/forloopJavascript.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'basisInladenPagina.html',
        chunks: ['app'],
       template: path.resolve('./src/basisInladenPagina.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'whileLoop100Veld.html',
        chunks: ['app'],
       template: path.resolve('./src/whileLoop100Veld.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'createArrayFromForm.html',
        chunks: ['app'],
       template: path.resolve('./src/createArrayFromForm.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'createObjectFromAForm.html',
        chunks: ['app'],
       template: path.resolve('./src/createObjectFromAForm.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'aanprekenVanEenInjectedElement.html',
        chunks: ['app'],
       template: path.resolve('./src/aanprekenVanEenInjectedElement.html')
      }),

      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader', // inject CSS to page
          }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                outputPath: 'images/',
                name: "[name].[ext]",
                esModule: false,
              },
            },
          ]
        },
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath:'fonts/',
                esModule: false,
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          }
        },
      ]
    }
  };
}
