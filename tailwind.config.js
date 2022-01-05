module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Roboto"','sans-serif'],
     },
     colors:{
      'primary': '#EA574E',
      'primary-light': '#EA574E',
      'primary-dark': '#EA574E',
      'dark': '#141516',
      'dark100': '#212124',
      'light': '#eeee',
     },

    backgroundColor: theme => ({
     ...theme('colors'),
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
     }),

     textColor: theme => theme('colors'),
  },

  variants: {
    extend: {},
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/assets/favicon.ico',
        appName: 'AbbaCoin',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    }
  ],
}
