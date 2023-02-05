/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 4s infinite linear'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(5%, 0%) scale(1.2)'
          },
          '66%': {
            transform: 'translate(10%, -10%) scale(0.8)'
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)'
          }
        }
      },
      colors: {
        blue: {
          50: '#edeef9',
          100: '#c7cbeb',
          200: '#acb2e2',
          300: '#868fd4',
          400: '#6e79cc',
          500: '#4a58bf',
          600: '#4350ae',
          700: '#353e88',
          800: '#293069',
          900: '#1f2550'
        },
        yellow: {
          50: '#fff8eb',
          100: '#ffe8c0',
          200: '#ffdda1',
          300: '#ffcd76',
          400: '#ffc35c',
          500: '#ffb433',
          600: '#e8a42e',
          700: '#b58024',
          800: '#8c631c',
          900: '#6b4c15'
        },
        red: {
          50: '#fceaea',
          100: '#f6bebe',
          200: '#f19e9e',
          300: '#eb7272',
          400: '#e75757',
          500: '#e12d2d',
          600: '#cd2929',
          700: '#a02020',
          800: '#7c1919',
          900: '#5f1313'
        },
        green: {
          50: '#f2fbe9',
          100: '#d8f4bb',
          200: '#c5ee9a',
          300: '#aae76c',
          400: '#99e250',
          500: '#80db24',
          600: '#74c721',
          700: '#5b9b1a',
          900: '#365c0f',
          800: '#467814'
        },
        grey: {
          50: '#ececec',
          100: '#c4c4c4',
          200: '#a7a7a7',
          300: '#7f7f7f',
          400: '#666666',
          500: '#404040',
          600: '#3a3a3a',
          700: '#2d2d2d',
          800: '#232323',
          900: '#1b1b1b'
        }
      },
      fontFamily: {
        sans: ['nunito-sans', 'sans-serif']
      },
      fontSize: {
        small: '0.5rem',
        caption: '0.625rem',
        b2: '0.8125rem',
        b1: '1rem',
        sub2: '1.25rem',
        sub1: '1.5625rem',
        h3: '1.9375rem',
        h2: '2.4375rem',
        h1: '3.0625rem'
      }
    }
  },
  plugins: []
}
