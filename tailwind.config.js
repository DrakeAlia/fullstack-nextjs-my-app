//** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './app/**/*.{tsx,jsx,js,ts}',
        './pages/**/*.{tsx,jsx,js,ts}',
        './components/**/*.{tsx,jsx,js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
            }
        }
    },
    plugins: [],
}


// Tailwind.config.js isn't required because it is already included in the 
// next.config.js file and it already knows where everything is with the 
// exception of the app directory

// Extend the theme with the font family, extends allows you to extend the theme 
// and not override it with some other value

// Add to global.css in styles directory
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// These are layers that going to be applied to the player base with layer base