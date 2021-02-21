const {join, resolve} = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const {HotModuleReplacementPlugin} = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: join(__dirname, "./src/index.js"),
    output: {
        path: join(__dirname, "dist"),
        filename: "index.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: join(__dirname, './src/index.html')
        })
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": resolve(__dirname, "src/")
        },
        extensions: ["*", ".js", ".vue", ".json"]
    }
}