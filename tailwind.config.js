/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      xs: '415px',
      // => @media (min-width: 415px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        lato: 'Lora',
      },
      colors: {
        grey: '#747474',
        blue: '#0A1828',
        turquoise: '#178582',
        gold: '#BFA181',
      }
    },
  },
  plugins: [],
}
