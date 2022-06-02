module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      fontFamily: {
        'fira':['Fira Code', 'monospace'],
        'pt-sans':['PT Sans', 'sans-serif'],

      },
      colors: {
        'nicehue': '#0a192f',
        'menubackcolor':'#112240',
        'neonsign':'#64ffda',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate( 0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },  /* The following five values can be played with to make the waving more or less extreme */
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },  /* Reset for the last half to pause */
         '100%': { transform: 'rotate( 0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite'
      },
    },
  },
  plugins: [require("daisyui")],
}
