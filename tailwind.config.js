/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "watercolor-pattern": "url('/public/watercolor-background.jpg')",
      },
    },
  },
  plugins: [],
};
