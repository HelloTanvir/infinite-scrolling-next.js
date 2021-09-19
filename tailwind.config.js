module.exports = {
    purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: {
                    500: '#1F2937',
                    600: '#838588',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
