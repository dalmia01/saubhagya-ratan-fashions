module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        "custom-green": "rgba(75, 140, 114, 0.8)",
      },

    },
  },
  plugins: [],
};
