/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#0D160B',
      'orange': '#FF9100',
      'blue': '#083D77',
      'gray': '#7C7A7A',
      'white': '#FFFFFF'
    },
    borderRadius: {
      'sm': '4',
      'md': '8'
    },
    fontFamily: {
      'sans': ['anton'],
      'mono': ['montserrat']
    },
    fontWeight: {
      'medium': '500',
      'bold': '700'
    },
    extend: {
      
    },
  },
  plugins: [],
}