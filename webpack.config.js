const path= require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, 'src/components/'),
            "@pages": path.resolve(__dirname, 'src/pages/'),
            "@style": path.resolve(__dirname, 'src/style/'),
            "@plugins": path.resolve(__dirname, 'src/plugins/')
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        compress: true,
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}