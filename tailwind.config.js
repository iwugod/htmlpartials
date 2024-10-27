/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  // content: ["./src/**/**/*.{html,js,ts}"],
  // important: true,
  content: [
    "./**/**/*.{html,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Montserrat"],
      },
      minHeight: {
        'custom': '800px', // Or any other value you need
      },
        colors: {
        primary: {
          DEFAULT: "#062E62",
          50: "#FDEA7F",
          100: "#FDE66B",
          200: "#FDE043",
          300: "#0050ff",
          400: "#062E62",
          500: "#0050ff",
          600: "#7C6902",
          700: "#453A01",
          800: "#0D0B00",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}

