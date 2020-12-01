const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            //   }
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
  