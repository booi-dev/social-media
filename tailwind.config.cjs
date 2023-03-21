/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '500px',
      sm2: '700px',
      md: '768px',
      lg: '976px',
      lg2: '1200px',
      xl: '1440px'
    },
    fontFamily: {
      'app-sans': ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'app-serif': ['Gerogia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {
      fontSize: {
        'app-font-11': '11px',
        'app-font-13': '13px',
        'app-font-14': '14px',
        'app-font-15': '15px',
        'app-font-17': '17px',
        'app-font-20': '20px',
      },
      colors: {
        'pri-blue-1': '#1d9bf0',
        'pri-blue-2': '#1A8BD8',

        'app-black-1': '#090809',
        'app-black-1.2': '#e2e8f0',
        'app-black-3': '#232324',

        'app-gray-1': '#2f3336',
        'app-gray-2': '#333639',
        'app-gray-3': '#71767b',

        'app-white-1': '#ffffff',
        'app-white-1.2': '#ffffffd9',
        'app-white-2': '#eff3f4',
        'app-white-3': '#e7e9ea',
        'app-white-4': '#d6d9db',
        'app-white-5': '#cfd9de',
      },
      animation: {
        expanse: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        expanse: {
          '75%, 100%': {
            transform: 'scale(1.5)', opacity: '0.5'
          }
        }
      }
    },
  },
  plugins: [],
}
