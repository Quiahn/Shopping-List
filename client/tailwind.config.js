module.exports = {
    purge: ['./src/components', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['disabled']
        },
    },
    plugins: [],
}
