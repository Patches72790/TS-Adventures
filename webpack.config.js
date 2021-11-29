const path = require('path')

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    mode: "development",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "./main.js",
    },
    devtool: "source-map",

    plugins: [],

    devServer : {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/',
        },
        hot: true,
        compress: true,
        port: 3000,
        proxy: {
            '/express-backend': 'http://localhost:5000'
        },
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ],
    }
};
