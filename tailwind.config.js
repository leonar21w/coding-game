module.exports = {
  content: [
    "./src/**/*.{html,js}", // Update this path if needed
    "./src/styles.css" // Ensure your styles file is included too
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.7s step-end infinite',
      },
      keyframes: {
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
