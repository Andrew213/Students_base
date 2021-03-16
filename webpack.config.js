const path = require("path")
const miniCssExcteractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


// let htmlHotPlugin = new HtmlWebpackHotPlugin({
//     // enable hot update, default: true
//     // if hot update acting strangly, set it to false, and open an issue here:
//     // https://github.com/cxphoe/html-webpack-hot-plugin
//     hot: true,
// });
let mode = 'development';
let target = "web";
if(process.env.NODE_ENV === 'production'){
    mode = 'production';
    target = "browserslist"
};



module.exports = {
    mode: mode,
    target: target,

    output: {
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename: "images/[hash][ext][query]",
        publicPath: ""
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                esModule: false
              }
            },
            {
                test: /\.(png|jpg|svg|webp)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                    loader: miniCssExcteractPlugin.loader, 
                    options: {
                        publicPath: " "
                    }
                    },
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },

    plugins: [
    new CleanWebpackPlugin(),
    new miniCssExcteractPlugin(),
    // new FileIncludeWebpackPlugin(
    //     {
    //       source: './src', // relative path to your templates
    //       replace: [{
    //         regex: /\[\[FILE_VERSION]]/, // additional things to replace
    //         to: 'v=1.0.0',
    //       }],
    //     },
    //   ), 
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),

        ],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        publicPath: "",
        open: true,
        hot: true,
        // before(app, server) {
        //     // This step is curcial. DevServer is needed to send reload message to opened page.
        //     // Without this step, the update of HtmlWebpackHotPlugin will be omitted and you will need to refresh the page manually.
        //     htmlHotPlugin.setDevServer(server)
        //   },
    }
}