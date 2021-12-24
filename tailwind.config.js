module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'color-blue': '#0079ff',
      'color-waika-gray': '#697c9a',
      'color-azure': '#4b6a9b',
      'color-tuna': '#2b3442',
      'color-magnolia': '#f6f8ff',
      'color-white': '#fff',
      'color-port-gore': '#1e2a47',
      'color-mirage': '#141d2f',
    },
    fontFamily: {
      'mono-space': ['Space Mono', 'monospace'],
    },
    screens: {
      xs: '360px',
      // => @media (min-width: 360px) { ... }
      sm: '480px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
