const path = require('path');

const config = {
    entry : {
        main : "./main"
    },
    output : {
        path : path.join(__dirname,'./dist'),
        publicPath : '/dist',
        filename : "main.js"
    },
    module:{
        rules: [
            {
                test: /\.css$/,

                use: [
                    'style-loader', //second
                    'css-loader' //first
                ]
            }
        ]
    }
};

module.exports = config;
