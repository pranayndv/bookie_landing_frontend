const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      rotate: {
        '180': '180deg',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
});
