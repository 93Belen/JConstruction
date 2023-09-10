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
      'sm': '4px',
      'md': '8px'
    },
    fontFamily: {
      'sans': ['var(--font-anton)'],
      'mono': ['var(--font-montserrat)']
    },
    fontWeight: {
      'medium': '400',
      'bold': '700'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      
    },
  }
}