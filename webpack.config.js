const path = require('path');

//entry point (app.js) y output (debe en public y absoluto)

//para encontrar nuestor direc:  ejecutar   node webpack.config.js
//Buuscar node path   usar path.join para unir el path absoluto con el relativo
//console.log(path.join(__dirname, 'public'));


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //Module es para loader del webpack, files son los archivos que terminan en .js para que use babel
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/     
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

