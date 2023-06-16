/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        tealColor: '#08979d',
        brightTeal: '#1FAF9F'
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin', 'flowbite/plugin')]
}
