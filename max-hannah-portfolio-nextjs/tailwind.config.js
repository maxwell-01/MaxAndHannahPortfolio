/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                portfolioWhite: '#ffffff',
                portfolioBlack: '#000000',
            },
            fontFamily: {
                heading: ['mongoose', 'sans-serif'],
                body: ['futura-pt', 'sans-serif'],
            },
            fontSize: {
                base: '30px',
                h3: '40px',
                h2: '60px',
                h1: '200px',
            },
            fontWeight: {
                regular: 400,
                bold: 700,
            },
            lineHeight: {
                heading1: '180px',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
