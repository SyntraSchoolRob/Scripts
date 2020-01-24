const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');

module.exports = function (env, argv) {
  return {
    mode: 'production',
    entry: {
      app:'./src/app.js'
    },

    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin()
      ]
    }
    ,
    plugins: [
      new CleanWebpackPlugin(),
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
        filename:'getallen.html',
        chunks: ['app'],
        template: path.resolve('./src/getallen.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'theorieDatatypes.html',
        chunks: ['app'],
        template: path.resolve('./src/theorieDatatypes.html')
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
        filename:'aanprekenVanEenInjectedElement.html',
        chunks: ['app'],
        template: path.resolve('./src/aanprekenVanEenInjectedElement.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        filename:'chagneIDOFfAnElement.html',
        chunks: ['app'],
        template: path.resolve('./src/chagneIDOFfAnElement.html')
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
        filename:'forloopJavascript.html',
        chunks: ['app'],
        template: path.resolve('./src/forloopJavascript.html')
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
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new MinifyPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
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
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: 'images/',
                name: "[name].[ext]",
                esModule: false,
              },
            },

          ],
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
