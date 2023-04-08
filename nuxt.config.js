import colors from 'vuetify/es5/util/colors'
const path = require('path')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - newcoin',
    title: 'newcoin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.lineicons.com/4.0/lineicons.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/chart.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-highcharts',
    // '@nuxtjs/auth'

  ],
  // build: {
  //   extend(config, { isDev, isClient }) {
  //     // ..
  //     config.module.rules.push({
  //       test: /\.(jsx|js|ts)$/,
  //       include: path.resolve(__dirname, 'src'),
  //       exclude: /node_modules/,
  //       use: [{
  //         loader: 'babel-loader',
  //         options: {
  //           presets: [
  //             ['@nuxt/babel-preset-app', {
  //               "targets": "defaults"
  //             }],
  //             'babel-preset-es2015'
  //           ]
  //         }
  //       }]
  //     })
  //     // Sets webpack's mode to development if `isDev` is true.
  //     if (isDev) {
  //       config.mode = 'development'
  //     }
  //   }
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://apingweb.com/api',
    common: {
      "Access-Control-Allow-Origin": "*"
    },
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/login', method: 'post', propertyName: 'token' },
  //         user: { url: '/user/136', method: 'get', propertyName: 'result' },
  //         logout: false
  //       },
  //       tokenType: '',
  //       tokenRequired: false,
  //     }
  //   }
  // },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    rtl: true,
    theme: {
      dark: false,
      rtl: true,
      themes: {
        rtl: true,
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

}
