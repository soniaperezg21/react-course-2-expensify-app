const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackDevServer = require('webpack-dev-server');

//Guarda el environment que se usa en package.json
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Un archivo para test y otro developments (.env.test en raiz) .env.development

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
};

//entry point (app.js) y output (debe en public y absoluto)

//para encontrar nuestor direc:  ejecutar   node webpack.config.js
//Buuscar node path   usar path.join para unir el path absoluto con el relativo
//console.log(path.join(__dirname, 'public'));

module.exports = (env) => {
    const isProduction = env === 'production';
    //const CSSExtract = new ExtractTextPlugin('styles.css');  //nameofTheFile
  
    return {
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          //use: CSSExtract.extract({
            use: [
                MiniCssExtractPlugin.loader,
                // 'css-loader',
                // 'sass-loader'
               {
                 loader: 'css-loader',
                 options: {
                   sourceMap: true
                 }
               },
               {
                 loader: 'sass-loader',
                 options: {
                   sourceMap: true
                 }
               }
            ]
         // })
        }]
      },
      plugins: [
        //CSSExtract, 
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles.css'
           // chunkFilename: '[id].css',
          }),
          new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY), 
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
          })
        //new ExtractTextPlugin('styles.css')
        //HtmlWebpackPluginConfig, ExtractTextPluginConfig
      ],
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
    };
  };
  