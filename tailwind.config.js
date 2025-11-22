/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#D4AF37',
                charcoal: '#121212',
                'dark-slate': '#1E1E1E',
            },
            fontFamily: {
                serif: ['Fraunces', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
