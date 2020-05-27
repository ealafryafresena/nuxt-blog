import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  router: {
    linkActiveClass: 'active-link'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    options: {
      customProperties: true
    },
    theme: {
      themes: {
        light: {
          primaryBase: '#3F51B5',
          primaryLight1: '#5C6BC0',
          primaryLight2: '#7986CB',
          primaryLight3: '#9FA8DA',
          primaryDark1: '#3949AB',
          primaryDark2: '#303F9F',
          primaryDark3: '#283593',
          greyBase: '#9e9e9e',
          greyLight1: '#bdbdbd',
          greyLight2: '#e0e0e0',
          greyLight3: '#eeeeee',
          greyLight4: '#f5f5f5',
          greyLight5: '#fafafa',
          greyDark1: '#757575',
          greyDark2: '#616161',
          greyDark3: '#424242',
          greyDark4: '#212121',
          contentLight: '#ffffff',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
