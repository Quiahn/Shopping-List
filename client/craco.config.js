// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tail windcss'),
                require('autoprefixer'),
            ],
        },
    },
}