/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: ["./app/**/*.{html,tsx,jsx,ts}",
            "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
          ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

