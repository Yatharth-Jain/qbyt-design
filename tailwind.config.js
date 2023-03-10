/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "BluredDivColor":"var(--BluredDivColor)",
        "SecondaryColor":"var(--SecondaryColor)",
        "SecondaryColorOpacity":"var(--SecondaryColorOpacity)"
      },
      fontSize:{

      },
      fontFamily:{
        HeadingFontFamily:"var(--HeadingFontFamily)",
        LinkFontHeading:"var(--LinkFontHeading)"
      }
    },
  },
  plugins: [],
}
