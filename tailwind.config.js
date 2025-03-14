/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#314836', 
        lemonlime: '#D7FF68',
        customYellow: '#D79E4D',
        winered: '#7E142E',
       },
       letterSpacing: {
        widests: '1.1em',
      },
      fontFamily: {
        // Use Playfair Display for serif styles (e.g., headings)
        serif: ['"Playfair Display"', 'serif'],
        // Use Open Sans for sans-serif styles (e.g., body text)
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

