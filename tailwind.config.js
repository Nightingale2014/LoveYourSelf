/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                '10xl': '10rem',
            },
            fontFamily: {
                merriweather: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [],
};
